import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommunicationService } from 'src/app/modules/_shared/services/communication.services';
import { HomeService } from '../../../home/services/home.service';
import { UserInfo } from '../../../_shared/services/userInfo.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {ProgressSpinnerComponent} from '../progress-spinner/progress-spinner.component';


@Component({
  selector: 'app-loan-search',
  templateUrl: './loan-search.component.html',
  styleUrls: ['./loan-search.component.scss']
})
export class LoanSearchComponent implements OnInit {
    public searchText: any = '';
    public advisorName;
    public advisorStreet;
    public advisorCity;
    public advisorState;
    public maturityDate;
    public loanAmount;
    public proposalID;
    public maxLoanAmount;
    public email;
    public advList: Array<{advisorName: string, advisorStreet: string
        advisorCity: string, advisorState: string, maturityDate: string,
        loanAmount: string, proposalID: string, maxLoanAmount: string, email: string}> = [];
    @Output() onSearch: EventEmitter<any> = new EventEmitter<any>();

    public loanInfo: any;
    constructor(
        private dialog: MatDialog,
        private communicationService: CommunicationService,
        private service: HomeService,
        private userinfo: UserInfo,
        private modalService: BsModalService
    ) {
    }

  ngOnInit() {
  }
    searchLoan() {
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        this.service.getLoanInfo(this.searchText).subscribe(
            (res) => {
                dialogRef.close();
                this.advList = [];
                for (let i = 0; i < res.Root.Proposals.length; i++) {
                    if ((res.Root.Proposals[i].ProposalStatus === 'SubLoan' && res.Root.Proposals[i].FacilityCategory !== 'Repayable')
                        || (res.Root.Proposals[i].ProposalStatus === 'SubLoan' && res.Root.Proposals[i].FacilityType === 'Acquisition Loan')) {
                        this.proposalID = res.Root.Proposals[i].ProposalId;

                        for (let j = 0; j < res.Root.SubLoanAdvisors.length; j++) {
                            if (this.proposalID === res.Root.SubLoanAdvisors[j].ProposalID) {
                                this.advisorName = res.Root.SubLoanAdvisors[j].legalname;
                                this.advisorStreet = res.Root.SubLoanAdvisors[j].primaryaddress;
                                this.advisorCity = res.Root.SubLoanAdvisors[j].city;
                                this.advisorState = res.Root.SubLoanAdvisors[j].stateprovince;
                                this.maturityDate = res.Root.Proposals[i].MaturityDate;
                                this.loanAmount = res.Root.Proposals[i].LoanAmount;
                                this.maxLoanAmount = res.Root.Proposals[i].MaxLoanAmount;
                                this.email = res.Root.SubLoanAdvisors[j].email;

                                this.advList.push({ advisorName: this.advisorName, advisorStreet: this.advisorStreet,
                                    advisorCity: this.advisorCity, advisorState: this.advisorState, maturityDate: this.maturityDate,
                                    loanAmount: this.loanAmount, proposalID: this.proposalID, maxLoanAmount: this.maxLoanAmount,
                                    email: this.email});
                            }
                        }
                    }
                }

                this.onSearch.emit(this);
            },
        (error) => {
                dialogRef.close();
            }
        );


    }
    searchOnEnter(e) {
        if (e.keyCode === 13) {
            if (this.searchText) {
                this.searchLoan();
            }
        }
        if (e.keyCode === 8 || e.keyCode === 46) {
            if (this.searchText.length === 1) {
                this.searchLoan();
            }
        }
    }
}
