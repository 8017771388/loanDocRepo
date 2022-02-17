import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PromissoryDocService } from "../../services/promissory-doc.service";
import { UserInfo } from "../../../_shared/services/userInfo.service";
import { CommunicationService } from "../../../_shared/services/communication.services";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material';
import { ProgressSpinnerComponent } from '../../../_shared/components/progress-spinner/progress-spinner.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommitmentTemplateComponent } from '../../../_shared/components/commitment-template/commitment-template.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-promissory-note',
  templateUrl: './promissory-note.component.html',
  styleUrls: ['./promissory-note.component.scss']
})
export class PromissoryNoteComponent implements OnInit {
    public records: any = [];
    public totalCount: number;
    public currentUser: any;
    public bsModalRef: BsModalRef;
    public isError: boolean=false;

    constructor(
        private changeDetector: ChangeDetectorRef,
        private promissoryDocService: PromissoryDocService,
        private userInfo: UserInfo,
        private cs: CommunicationService,
        private router: Router,
        private modalService: BsModalService,
        private dialog: MatDialog, private toastr: ToastrService) { }

    ngOnInit() {
        this.initData();
        this.currentUser = this.userInfo._currentUserFn();
  }
initData() {
    this.promissoryDocService.getData().subscribe(data => {

        this.records = data['data'];
        this.totalCount = this.records.length;
        this.cs.setCFO(this.records);
    }, (err) => {
            this.cs.clearLoader();
            this.isError = true;

        //this.toastr.error("We are unable to process your request at this time. Please try again later.")
    });
}
    contentReady(e) {
        this.totalCount = e.component.totalCount();
    }
    webViewer(result) {
        const initialState = {
            title: 'Doc Viewer',
            base64: result.base64
        };
        this.bsModalRef = this.modalService.show(CommitmentTemplateComponent, {
            initialState,
            backdrop: 'static',
            class: 'modalLg',
        });
        this.bsModalRef.content.closeBtnName = 'Close';
    }
    sendPromissoryNote(a) {
        console.log('a', a);
        var param = {
            formId: (a.data.termLength === "5" ? "fiveYearNote" : (a.data.termLength === "7" ? "sevenYearNote" : "")),
            metaData: {
                repID: a.data.repID,
                advisorName: a.data.advisorName,
                advisorAddress: a.data.advisorAddress,
                advisorCity: a.data.advisorCity,
                advisorState: a.data.advisorState,
                advisorZip: a.data.advisorZip,
                loanAmount: a.data.loanAmount,
                termLength: a.data.termLength,
                lplEmail: a.data.lplEmail,
                principalForgivenessPerYear: a.data.principalForgivenessPerYear,
                status: a.data.status,
                advisorEmail: a.data.advisorEmail,
                username: this.currentUser.userName

            }
        }
        console.log('param', param);
        this.cs.displayLoader(true);
        this.promissoryDocService.sendDocument(param).subscribe(res => {
            if (res["status"] == "sent") {              
                this.cs.clearLoader();
                a.data.status = "Sent";
                this.records.map(obj => (a.data.repID === obj.repID) || obj);
                console.log('records', this.records);
                this.toastr.success("Successfully processed your request.");
            }
            else if (res["status"] == "already sent") {
                this.cs.clearLoader();
                this.toastr.show("The request already processed.");
            }
           
        }, (err) => {
            this.cs.clearLoader();
                this.toastr.error("We are unable to process your request at this time. Please try again later.")
        });
    }
    previewPromissoryNote(a) {
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        var param = {
            formId: (a.data.termLength === "5" ? "fiveYearNote" : (a.data.termLength === "7" ? "sevenYearNote" : "")),
            metaData: {
                repID: a.data.repID,
                advisorName: a.data.advisorName,
                advisorAddress: a.data.advisorAddress,
                advisorCity: a.data.advisorCity,
                advisorState: a.data.advisorState,
                advisorZip: a.data.advisorZip,
                loanAmount: a.data.loanAmount,
                termLength: a.data.termLength,
                lplEmail: a.data.lplEmail,
                principalForgivenessPerYear: a.data.principalForgivenessPerYear,
                status: a.data.status,
                advisorEmail: a.data.advisorEmail,
                username: this.currentUser.userName

            }
        }
        this.promissoryDocService.previewDocument(param).subscribe(result => {
            if (result['message'] === 'success') {
                dialogRef.close();
                this.webViewer(result);
            }
        },
            (error) => {
                dialogRef.close();
                this.toastr.error("We are unable to process your request at this time. Please try again later.")
            });
    }
}
