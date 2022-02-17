import { Component, OnInit, ViewChild, AfterViewInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserInfo } from '../../../_shared/services/userInfo.service';
import { HomeService } from '../../services/home.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommunicationService } from 'src/app/modules/_shared/services/communication.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommitmentTemplateComponent } from '../../../_shared/components/commitment-template/commitment-template.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ProgressSpinnerComponent } from '../../../_shared/components/progress-spinner/progress-spinner.component';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    providers: [HomeService, DatePipe]
})
export class HomePageComponent implements OnInit, AfterViewInit, DoCheck {
    registerForm: FormGroup;
    registerFormLineOfCredit: FormGroup;
    registerFormWorkingCapitalLoanOver75K: FormGroup;
    registerFormWorkingCapitalLoanCoborrowerTemplate: FormGroup;
    registerFormAcquisitionLoanDecliningPayments: FormGroup;
    registerFormAcquisitionLoanCoborrowerEqualpyments: FormGroup;
    registerFormAcquisitionLoanEqualPayments: FormGroup;
    registerFormVCFOAcquisitionLoanDecliningPayments: FormGroup;
    registerFormVCFOAcquisitionLoanEqualPayments: FormGroup;
    registerFormOneYearForgivable: FormGroup;
    registerFormThreeYearForgivable: FormGroup;
    registerFormFiveYearForgivableTACoBorrowerNote: FormGroup;
    registerFormFiveYearForgivable: FormGroup;
    registerFormSevenYearForgivable: FormGroup;
    registerFormNineYearForgivable: FormGroup;
    registerFormTenYearForgivable: FormGroup;
    registerFormExtRefinanceLoanDecliningPayments: FormGroup;
    registerFormExtRefinanceLoanEqualPayments: FormGroup;
    registerFormGrowthLoanDecliningPayments: FormGroup;
    registerFormGrowthLoanEqualPayments: FormGroup;
    registerFormGrowthLoanWithCoborrowerEqualpayments: FormGroup;
    registerFormVCFOGrowthLoanDecliningPayments: FormGroup;
    registerFormVCFOGrowthLoanEqualPayments: FormGroup;
    registerFormIntRefinanceLoanDecliningPayments: FormGroup;
    registerFormIntRefinanceLoanEqualPayments: FormGroup;

    registerFormVirtualCFOExtRefinanceLoanDecliningPayments: FormGroup;
    registerFormVirtualCFOExtRefinanceLoanEqualPayments: FormGroup;

    registerFormVirtualCFOIntRefinanceDecliningPayments: FormGroup;
    registerFormVirtualCFOIntRefinanceEqualPayments: FormGroup;


    public bsModalRef: BsModalRef;
    submitted = false;
    preview = false;
    gridType;
    lineOfCreditRequestObject: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            finalApproverName: 'John Doe',
            lineOfCreditLimit: ''
        }
    };
    workingCapitalLoanOver75KObject: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            borrowerAddress: '',
            borrowerName: ''
        }
    };
    workingCapitalLoanCoborrowerTemplateObject: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            jurisdiction: ''
        }
    };
    FiveYearForgivableTACoBorrowerNoteObject: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            jurisdiction: ''

        }
    };
    AcquisitionLoanDecliningPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    AcquisitionLoanCoborrowerEqualpyments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            signerThreeEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: '',
            undersignedOne: '',
            addressOfBorrowerOne: '',
            undersignedTwo: '',
            addressOfBorrowerTwo: '',
            businessName: '',
            jurisdiction: ''
        }
    };
    AcquisitionLoanEqualPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    vCFOAcquisitionLoanDecliningPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    vCFOAcquisitionLoanEqualPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    OneYearForgivable: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    FiveYearForgivableTObject: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: ''

        }
    };
    SevenYearForgivableTObject: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            annualForgivenessAmountYearSix: '',
            annualForgivenessAmountYearSeven: ''

        }
    };
    NineYearForgivableTObject: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            annualForgivenessAmountYearSix: '',
            annualForgivenessAmountYearSeven: '',
            annualForgivenessAmountYearEight: '',
            annualForgivenessAmountYearNine: ''
        }
    };
    TenYearForgivableTObject: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            annualForgivenessAmountYearSix: '',
            annualForgivenessAmountYearSeven: '',
            annualForgivenessAmountYearEight: '',
            annualForgivenessAmountYearNine: '',
            annualForgivenessAmountYearTen: ''
        }
    };
    ExtRefinanceLoanDecliningPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    ExtRefinanceLoanEqualPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    GrowthLoanDecliningPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    GrowthLoanEqualPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe'
        }
    };
    GrowthLoanWithCoborrowerEqualpayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            principalPayments: '',
            undersignedOne: '',
            addressOfBorrowerOne: '',
            undersignedTwo: '',
            addressOfBorrowerTwo: '',
            businessName: '',
            jurisdiction: ''
        }
    };
    vCFOGrowthLoanDecliningPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    vCFOGrowthLoanEqualPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    IntRefinanceLoanDecliningPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    IntRefinanceLoanEqualPaymentsRq: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe'
        }
    };
    VirtualCFOExtRefinanceLoanDecliningPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    VirtualCFOExtRefinanceLoanEqualPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    VirtualCFOIntRefinanceDecliningPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe',
            representativeName: '',
            representativeID: '',
            annualForgivenessAmountYearOne: '',
            annualForgivenessAmountYearTwo: '',
            annualForgivenessAmountYearThree: '',
            annualForgivenessAmountYearFour: '',
            annualForgivenessAmountYearfive: '',
            principalPayments: ''

        }
    };
    VirtualCFOIntRefinanceEqualPayments: any = {
        formId: '',
        metaData: {
            signerOneEmailAddress: '',
            signerTwoEmailAddress: '',
            interestPrincipalAmt: '',
            signerTwoName: 'LPL Rep Name',
            principalLoanAmount: '100,000',
            loanAmountInWords: 'ONE HUNDRED THOUSAND',
            borrowersName: 'Mark Nowakowski',
            borrowersAddress: '66 Mead Street',
            maturityDate: '12/12/2020',
            numberOfPaymentGraceMonths: 'SIX',
            amortizationPaymentAmount: '50,000',
            interestRate: '4',
            primeInterestRate: '5',
            noPaymentsDue: '6',
            finalApproverName: 'John Doe'
        }
    };
    constructor(private dialog: MatDialog, public datepipe: DatePipe, private formBuilder: FormBuilder,
                private communicationService: CommunicationService, private service: HomeService,
                private datePipe: DatePipe, private userinfo: UserInfo, private modalService: BsModalService,
                private changeDetector: ChangeDetectorRef) {

    }
    public switchView = true;
    ngOnInit() {
        this.registerFormLineOfCredit = this.formBuilder.group({
            lineOfCreditLimit: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            interestRate: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormWorkingCapitalLoanOver75K = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormWorkingCapitalLoanCoborrowerTemplate = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            jurisdiction: ['', Validators.required],
            undersignedOne: ['', Validators.required],
            addressOfBorrowerOne: ['', Validators.required],
            undersignedTwo: ['', Validators.required],
            addressOfBorrowerTwo: ['', Validators.required],
            businessName: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            coSignerEmail: ['', [Validators.required, Validators.email]],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormAcquisitionLoanDecliningPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            principalPayments: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormAcquisitionLoanCoborrowerEqualpyments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            jurisdiction: ['', Validators.required],
            undersignedOne: ['', Validators.required],
            addressOfBorrowerOne: ['', Validators.required],
            undersignedTwo: ['', Validators.required],
            addressOfBorrowerTwo: ['', Validators.required],
            businessName: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            coSignerEmail: ['', [Validators.required, Validators.email]],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormAcquisitionLoanEqualPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormVCFOAcquisitionLoanDecliningPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            principalPayments: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormVCFOAcquisitionLoanEqualPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormOneYearForgivable = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            annualForgivenessAmountYearOne: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormThreeYearForgivable = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            annualForgivenessAmountYearOne: ['', Validators.required],
            annualForgivenessAmountYearTwo: ['', Validators.required],
            annualForgivenessAmountYearThree: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormFiveYearForgivableTACoBorrowerNote = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            jurisdiction: ['', Validators.required],
            undersignedOne: ['', Validators.required],
            addressOfBorrowerOne: ['', Validators.required],
            undersignedTwo: ['', Validators.required],
            addressOfBorrowerTwo: ['', Validators.required],
            businessName: ['', Validators.required],
            maturityDate: ['', Validators.required],
            representativeName: ['', Validators.required],
            representativeID: ['', Validators.required],
            annualForgivenessAmountYearOne: ['', Validators.required],
            annualForgivenessAmountYearTwo: ['', Validators.required],
            annualForgivenessAmountYearThree: ['', Validators.required],
            annualForgivenessAmountYearFour: ['', Validators.required],
            annualForgivenessAmountYearfive: ['', Validators.required],
            coSignerEmail: ['', [Validators.required, Validators.email]],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormFiveYearForgivable = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            annualForgivenessAmountYearOne: ['', Validators.required],
            annualForgivenessAmountYearTwo: ['', Validators.required],
            annualForgivenessAmountYearThree: ['', Validators.required],
            annualForgivenessAmountYearFour: ['', Validators.required],
            annualForgivenessAmountYearfive: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormSevenYearForgivable = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            annualForgivenessAmountYearOne: ['', Validators.required],
            annualForgivenessAmountYearTwo: ['', Validators.required],
            annualForgivenessAmountYearThree: ['', Validators.required],
            annualForgivenessAmountYearFour: ['', Validators.required],
            annualForgivenessAmountYearfive: ['', Validators.required],
            annualForgivenessAmountYearSix: ['', Validators.required],
            annualForgivenessAmountYearSeven: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormNineYearForgivable = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            annualForgivenessAmountYearOne: ['', Validators.required],
            annualForgivenessAmountYearTwo: ['', Validators.required],
            annualForgivenessAmountYearThree: ['', Validators.required],
            annualForgivenessAmountYearFour: ['', Validators.required],
            annualForgivenessAmountYearfive: ['', Validators.required],
            annualForgivenessAmountYearSix: ['', Validators.required],
            annualForgivenessAmountYearSeven: ['', Validators.required],
            annualForgivenessAmountYearEight: ['', Validators.required],
            annualForgivenessAmountYearNine: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormTenYearForgivable = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            annualForgivenessAmountYearOne: ['', Validators.required],
            annualForgivenessAmountYearTwo: ['', Validators.required],
            annualForgivenessAmountYearThree: ['', Validators.required],
            annualForgivenessAmountYearFour: ['', Validators.required],
            annualForgivenessAmountYearfive: ['', Validators.required],
            annualForgivenessAmountYearSix: ['', Validators.required],
            annualForgivenessAmountYearSeven: ['', Validators.required],
            annualForgivenessAmountYearEight: ['', Validators.required],
            annualForgivenessAmountYearNine: ['', Validators.required],
            annualForgivenessAmountYearTen: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormExtRefinanceLoanDecliningPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            principalPayments: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormExtRefinanceLoanEqualPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormGrowthLoanDecliningPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            principalPayments: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormGrowthLoanEqualPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormGrowthLoanWithCoborrowerEqualpayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            jurisdiction: ['', Validators.required],
            undersignedOne: ['', Validators.required],
            addressOfBorrowerOne: ['', Validators.required],
            undersignedTwo: ['', Validators.required],
            addressOfBorrowerTwo: ['', Validators.required],
            businessName: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            coSignerEmail: ['', [Validators.required, Validators.email]],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormVCFOGrowthLoanDecliningPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormVCFOGrowthLoanEqualPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormIntRefinanceLoanDecliningPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            principalPayments: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });
        this.registerFormIntRefinanceLoanEqualPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            primeInterestRate: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],

        });

        this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
             interestRate: ['', Validators.required],
             interestPrincipalAmt: ['', Validators.required],
             noPaymentsDue: ['', Validators.required],
             advisorEmail: ['', [Validators.required, Validators.email]],
             lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormVirtualCFOExtRefinanceLoanEqualPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            noPaymentsDue: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });

        this.registerFormVirtualCFOIntRefinanceDecliningPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            principalPayments: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        this.registerFormVirtualCFOIntRefinanceEqualPayments = this.formBuilder.group({
            principalLoanAmount: ['', Validators.required],
            loanAmountInWords: ['', Validators.required],
            borrowersName: ['', Validators.required],
            borrowersAddress: ['', Validators.required],
            maturityDate: ['', Validators.required],
            interestRate: ['', Validators.required],
            interestPrincipalAmt: ['', Validators.required],
            advisorEmail: ['', [Validators.required, Validators.email]],
            lplEmail: ['', [Validators.required, Validators.email]],
        });
        // this.registerForm = this.formBuilder.group({
        //    title: ['', Validators.required],
        //    //maturityDate: ['', Validators.required],
        //    //interestRate: ['', Validators.required],
        //    //principalLoanAmount: ['', Validators.required],
        //    //loanAmountInWords: ['', Validators.required],
        //    //lineOfCreditLimit: ['', Validators.required],
        //    //borrowersName: ['', Validators.required],
        //    //borrowersAddress: ['', Validators.required],
        //    //primeInterestRate: ['', Validators.required],
        //    //noPaymentsDue: ['', Validators.required],
        //    //interestPrincipalAmt: ['', Validators.required],
        //    firstName: ['', Validators.required],
        //    lastName: ['', Validators.required],
        //    //advisorEmail: ['', [Validators.required, Validators.email]],
        //    //lplEmail: ['', [Validators.required, Validators.email]],
        //    coSignerEmail: ['', [Validators.required, Validators.email]],
        //    password: ['', [Validators.required, Validators.minLength(6)]],
        //    confirmPassword: ['', Validators.required],
        //    acceptTerms: [false, Validators.requiredTrue],
        //    representativeName: ['', Validators.required],
        //    representativeID: ['', Validators.required],
        //    annualForgivenessAmountYearOne: ['', Validators.required],
        //    annualForgivenessAmountYearTwo: ['', Validators.required],
        //    annualForgivenessAmountYearThree: ['', Validators.required],
        //    annualForgivenessAmountYearFour: ['', Validators.required],
        //    annualForgivenessAmountYearfive: ['', Validators.required],
        //    annualForgivenessAmountYearSix: ['', Validators.required],
        //    annualForgivenessAmountYearSeven: ['', Validators.required],
        //    annualForgivenessAmountYearEight: ['', Validators.required],
        //    annualForgivenessAmountYearNine: ['', Validators.required],
        //    annualForgivenessAmountYearTen: ['', Validators.required],
        //    //principalPayments: ['', Validators.required],
        //    //undersignedOne: ['', Validators.required],
        //    //addressOfBorrowerOne: ['', Validators.required],
        //    //undersignedTwo: ['', Validators.required],
        //    //addressOfBorrowerTwo: ['', Validators.required],
        //    //businessName: ['', Validators.required],
        //    //jurisdiction: ['', Validators.required]
        // }, {});
    }

    ngAfterViewInit() { }

    ngDoCheck() { }

    navHandler(cevent) {
        this.gridType = cevent.type;
        this.changeDetector.detectChanges();
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerFormLineOfCredit.controls; }
    get f2() { return this.registerFormWorkingCapitalLoanOver75K.controls; }
    get f3() { return this.registerFormWorkingCapitalLoanCoborrowerTemplate.controls; }
    get f4() { return this.registerFormAcquisitionLoanDecliningPayments.controls; }
    get f5() { return this.registerFormAcquisitionLoanCoborrowerEqualpyments.controls; }
    get f6() { return this.registerFormAcquisitionLoanEqualPayments.controls; }
    get f7() { return this.registerFormVCFOAcquisitionLoanDecliningPayments.controls; }
    get f8() { return this.registerFormVCFOAcquisitionLoanEqualPayments.controls; }
    get f9() { return this.registerFormOneYearForgivable.controls; }
    get f10() { return this.registerFormThreeYearForgivable.controls; }
    get f11() { return this.registerFormFiveYearForgivableTACoBorrowerNote.controls; }
    get f12() { return this.registerFormFiveYearForgivable.controls; }
    get f13() { return this.registerFormSevenYearForgivable.controls; }
    get f14() { return this.registerFormNineYearForgivable.controls; }
    get f15() { return this.registerFormTenYearForgivable.controls; }
    get f16() { return this.registerFormExtRefinanceLoanDecliningPayments.controls; }
    get f17() { return this.registerFormExtRefinanceLoanEqualPayments.controls; }
    get f18() { return this.registerFormGrowthLoanDecliningPayments.controls; }
    get f19() { return this.registerFormGrowthLoanEqualPayments.controls; }
    get f20() { return this.registerFormGrowthLoanWithCoborrowerEqualpayments.controls; }
    get f21() { return this.registerFormVCFOGrowthLoanDecliningPayments.controls; }
    get f22() { return this.registerFormVCFOGrowthLoanEqualPayments.controls; }
    get f23() { return this.registerFormIntRefinanceLoanDecliningPayments.controls; }
    get f24() { return this.registerFormIntRefinanceLoanEqualPayments.controls; }

    get f25() { return this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.controls; }
    get f26() { return this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.controls; }
    get f27() { return this.registerFormVirtualCFOIntRefinanceDecliningPayments.controls; }
	get f28() { return this.registerFormVirtualCFOIntRefinanceEqualPayments.controls; }

    // TODO: Fix field validation
    onSend(obj) {
        this.preview = false;
        this.submitted = true;
        this.requestBuilder();
        // stop here if form LineOfCredit is invalid
        //   if (this.registerForm.invalid) {
        // return;
        // }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
    onReset() {
        this.submitted = false;
        switch (this.gridType) {
            case '1':
                this.registerFormLineOfCredit.reset();
                break;
            case '2':
                this.registerFormWorkingCapitalLoanOver75K.reset();
                break;
            case '3':
                this.registerFormWorkingCapitalLoanCoborrowerTemplate.reset();
                break;
            case '4':
                this.registerFormAcquisitionLoanDecliningPayments.reset();
                break;
            case '5':
                this.registerFormAcquisitionLoanCoborrowerEqualpyments.reset();
                break;
            case '6':
                this.registerFormAcquisitionLoanEqualPayments.reset();
                break;
            case '7':
                this.registerFormVCFOAcquisitionLoanDecliningPayments.reset();
                break;
            case '8':
                this.registerFormVCFOAcquisitionLoanEqualPayments.reset();
                break;
            case '9':
                this.registerFormOneYearForgivable.reset();
                break;
            case '10':
                this.registerFormThreeYearForgivable.reset();
                break;
            case '11':
                this.registerFormFiveYearForgivableTACoBorrowerNote.reset();
                break;
            case '12':
                this.registerFormFiveYearForgivable.reset();
                break;
            case '13':
                this.registerFormSevenYearForgivable.reset();
                break;
            case '14':
                this.registerFormNineYearForgivable.reset();
                break;
            case '15':
                this.registerFormTenYearForgivable.reset();
                break;
            case '16':
                this.registerFormExtRefinanceLoanDecliningPayments.reset();
                break;
            case '17':
                this.registerFormExtRefinanceLoanEqualPayments.reset();
                break;
            case '18':
                this.registerFormGrowthLoanDecliningPayments.reset();
                break;
            case '19':
                this.registerFormGrowthLoanEqualPayments.reset();
                break;
            case '20':
                this.registerFormGrowthLoanWithCoborrowerEqualpayments.reset();
                break;
            case '21':
                this.registerFormVCFOGrowthLoanDecliningPayments.reset();
                break;
            case '22':
                this.registerFormVCFOGrowthLoanEqualPayments.reset();
                break;
            case '23':
                this.registerFormIntRefinanceLoanDecliningPayments.reset();
                break;
            case '24':
                this.registerFormIntRefinanceLoanEqualPayments.reset();
                break;
            case '25':
                this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.reset();
                break;
            case '26':
                this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.reset();
                break;
            case '27':
                this.registerFormVirtualCFOIntRefinanceDecliningPayments.reset();
                break;
            case '28':
                this.registerFormVirtualCFOIntRefinanceEqualPayments.reset();
                break;
            default:
                console.log('No form provided');
                break;
        }

    }

    requestBuilder() {
        switch (this.gridType) {
            case '1':
                console.log('lineOfCredit');
                this.lineOfCreditRq();
                break;
            case '2':
                console.log('workingCapitalLoanOver75K');
                this.workingCapitalLoanOver75KRq();
                break;
            case '3':
                console.log('workingCapitalLoanCoborrowerTemplate');
                this.workingCapitalLoanCoborrowerTemplateRq();
                break;
            case '4':
                console.log('acquisitionLoanDecliningPayments');
                this.acquisitionLoanDecliningPaymentsRq();
                break;
            case '5':
                console.log('acquisitionLoanCoborrowerEqualpayments');
                this.acquisitionLoanCoborrowerEqualpaymentsRq();
                break;
            case '6':
                console.log('acquisitionLoanEqualPayments');
                this.acquisitionLoanEqualPaymentsRq();
                break;
            case '7':
                console.log('vCFOAcquisitionLoanDecliningPayments');
                this.vCFOAcquisitionLoanDecliningPaymentsRq();
                break;
            case '8':
                console.log('vCFOAcquisitionLoanEqualPayments');
                this.vCFOAcquisitionLoanEqualPaymentsRq();
                break;
            case '9':
                console.log('oneYearForgivable');
                this.oneYearForgivableRq();
                break;
            case '10':
                console.log('threeYearForgivable');
                this.threeYearForgivableRq();
                break;
            case '11':
                console.log('fiveYearForgivableTACoBorrowerNote');
                this.fiveYearForgivableTACoBorrowerNoteRq();
                break;
            case '12':
                console.log('fiveYearForgivable');
                this.fiveYearForgivableRq();
                break;
            case '13':
                console.log('sevenYearForgivable');
                this.sevenYearForgivableRq();
                break;
            case '14':
                console.log('nineYearForgivable');
                this.nineYearForgivableRq();
                break;
            case '15':
                console.log('tenYearForgivable');
                this.tenYearForgivableRq();
                break;
            case '16':
                console.log('extRefinanceLoanDecliningPayments');
                this.extRefinanceLoanDecliningPaymentsRq();
                break;
            case '17':
                console.log('extRefinanceLoanEqualPayments');
                this.extRefinanceLoanEqualPaymentsRq();
                break;
            case '18':
                console.log('growthLoanDecliningPayments');
                this.growthLoanDecliningPaymentsRq();
                break;
            case '19':
                console.log('growthLoanEqualPayments');
                this.growthLoanEqualPaymentsRq();
                break;
            case '20':
                console.log('growthLoanWithCoborrowerEqualpayments');
                this.growthLoanWithCoborrowerEqualpaymentsRq();
                break;
            case '21':
                console.log('vCFOGrowthLoanDecliningPayments');
                this.vCFOGrowthLoanDecliningPaymentsRq();
                break;
            case '22':
                console.log('vCFOGrowthLoanEqualPayments');
                this.vCFOGrowthLoanEqualPaymentsRq();
                break;
            case '23':
                console.log('intRefinanceLoanDecliningPayments');
                this.intRefinanceLoanDecliningPaymentsRq();
                break;
            case '24':
                console.log('intRefinanceLoanEqualPayments');
                this.intRefinanceLoanEqualPaymentsRq();
                break;
            case '25':
                console.log('virtualCFOExtRefinanceLoanDecliningPayments');
                this.virtualCFOExtRefinanceLoanDecliningPaymentsRq();
                break;
            case '26':
                console.log('virtualCFOExtRefinanceLoanEqualPayments');
                this.virtualCFOExtRefinanceLoanEqualPaymentsRq();
                break;
            case '27':
                console.log('virtualCFOIntRefinanceDecliningPayments');
                this.virtualCFOIntRefinanceDecliningPaymentsRq();
                break;
            case '28':
                console.log('virtualCFOIntRefinanceEqualPayments');
                this.virtualCFOIntRefinanceEqualPaymentsRq();
                break;
            default:
                console.log('No form provided');
                break;
        }
    }

    lineOfCreditRq() {
        this.lineOfCreditRequestObject.formId = 'lineOfCredit';
        this.lineOfCreditRequestObject.metaData.signerOneEmailAddress = this.registerFormLineOfCredit.value.advisorEmail;
        this.lineOfCreditRequestObject.metaData.signerTwoEmailAddress = this.registerFormLineOfCredit.value.lplEmail;
        this.lineOfCreditRequestObject.metaData.interestRate = this.registerFormLineOfCredit.value.interestRate;
        this.lineOfCreditRequestObject.metaData.primeInterestRate = this.registerFormLineOfCredit.value.primeInterestRate;

        this.lineOfCreditRequestObject.metaData.lineOfCreditLimit = this.registerFormLineOfCredit.value.lineOfCreditLimit;
        this.lineOfCreditRequestObject.metaData.borrowersName = this.registerFormLineOfCredit.value.borrowersName;
        this.lineOfCreditRequestObject.metaData.borrowersAddress = this.registerFormLineOfCredit.value.borrowersAddress;
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.lineOfCreditRequestObject).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                }
            );
        } else {
            this.service.sendDocument(this.lineOfCreditRequestObject).subscribe(result => {
                console.log('success');
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }

    workingCapitalLoanOver75KRq() {
        this.workingCapitalLoanOver75KObject.formId = 'workingCapitalLoanOver75K';
        this.workingCapitalLoanOver75KObject.metaData.signerOneEmailAddress = this.registerFormWorkingCapitalLoanOver75K.value.advisorEmail;
        this.workingCapitalLoanOver75KObject.metaData.signerTwoEmailAddress = this.registerFormWorkingCapitalLoanOver75K.value.lplEmail;
        this.workingCapitalLoanOver75KObject.metaData.interestPrincipalAmt = this.registerFormWorkingCapitalLoanOver75K.value.interestPrincipalAmt;
        this.workingCapitalLoanOver75KObject.metaData.interestRate = this.registerFormWorkingCapitalLoanOver75K.value.interestRate;
        this.workingCapitalLoanOver75KObject.metaData.primeInterestRate = this.registerFormWorkingCapitalLoanOver75K.value.primeInterestRate;
        this.workingCapitalLoanOver75KObject.metaData.noPaymentsDue = this.registerFormWorkingCapitalLoanOver75K.value.noPaymentsDue;

        this.workingCapitalLoanOver75KObject.metaData.principalLoanAmount = this.registerFormWorkingCapitalLoanOver75K.value.principalLoanAmount;
        this.workingCapitalLoanOver75KObject.metaData.undersignedOne = this.registerFormWorkingCapitalLoanOver75K.value.borrowersName;
        this.workingCapitalLoanOver75KObject.metaData.addressOfBorrowerOne = this.registerFormWorkingCapitalLoanOver75K.value.borrowersAddress;
        this.workingCapitalLoanOver75KObject.metaData.loanAmountInWords = this.registerFormWorkingCapitalLoanOver75K.value.loanAmountInWords;
        this.workingCapitalLoanOver75KObject.metaData.maturityDate = this.registerFormWorkingCapitalLoanOver75K.value.maturityDate;
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        console.log(this.workingCapitalLoanOver75KObject.metaData);
        if (this.preview) {
            this.service.previewDocument(this.workingCapitalLoanOver75KObject).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                }
            );
        } else {
            this.service.sendDocument(this.workingCapitalLoanOver75KObject).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    workingCapitalLoanCoborrowerTemplateRq() {
        this.workingCapitalLoanCoborrowerTemplateObject.formId = 'workingCapitalLoanCoborrowerTemplate';
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.signerOneEmailAddress = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.advisorEmail;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.signerTwoEmailAddress = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.lplEmail;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.interestPrincipalAmt = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.interestPrincipalAmt;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.primeInterestRate = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.primeInterestRate;

        this.workingCapitalLoanCoborrowerTemplateObject.metaData.loanAmountInWords = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.loanAmountInWords;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.principalLoanAmount = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.principalLoanAmount;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.maturityDate = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.maturityDate;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.undersignedOne = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.undersignedOne;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.addressOfBorrowerOne = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.addressOfBorrowerOne;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.undersignedTwo = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.undersignedTwo;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.addressOfBorrowerTwo = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.addressOfBorrowerTwo;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.jurisdiction = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.jurisdiction;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.businessName = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.businessName;
        this.workingCapitalLoanCoborrowerTemplateObject.metaData.signerThreeEmailAddress = this.registerFormWorkingCapitalLoanCoborrowerTemplate.value.coSignerEmail;
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.workingCapitalLoanCoborrowerTemplateObject).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            }, (error) => {
                dialogRef.close();
            });
        } else {
            this.service.sendDocument(this.workingCapitalLoanCoborrowerTemplateObject).subscribe(result => {
                dialogRef.close();
                console.log(result);
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }

    acquisitionLoanDecliningPaymentsRq() {
        this.AcquisitionLoanDecliningPayments.formId = 'AcquisitionLoanDecliningPayments';
        this.AcquisitionLoanDecliningPayments.metaData.signerOneEmailAddress = this.registerFormAcquisitionLoanDecliningPayments.value.advisorEmail;
        this.AcquisitionLoanDecliningPayments.metaData.signerTwoEmailAddress = this.registerFormAcquisitionLoanDecliningPayments.value.lplEmail;
        this.AcquisitionLoanDecliningPayments.metaData.interestPrincipalAmt = this.registerFormAcquisitionLoanDecliningPayments.value.principalPayments;
        this.AcquisitionLoanDecliningPayments.metaData.interestRate = this.registerFormAcquisitionLoanDecliningPayments.value.interestRate;
        this.AcquisitionLoanDecliningPayments.metaData.primeInterestRate = this.registerFormAcquisitionLoanDecliningPayments.value.primeInterestRate;
        this.AcquisitionLoanDecliningPayments.metaData.noPaymentsDue = this.registerFormAcquisitionLoanDecliningPayments.value.noPaymentsDue;

        this.AcquisitionLoanDecliningPayments.metaData.principalLoanAmount = this.registerFormAcquisitionLoanDecliningPayments.value.principalLoanAmount;
        this.AcquisitionLoanDecliningPayments.metaData.undersignedOne = this.registerFormAcquisitionLoanDecliningPayments.value.borrowersName;
        this.AcquisitionLoanDecliningPayments.metaData.addressOfBorrowerOne = this.registerFormAcquisitionLoanDecliningPayments.value.borrowersAddress;
        this.AcquisitionLoanDecliningPayments.metaData.loanAmountInWords = this.registerFormAcquisitionLoanDecliningPayments.value.loanAmountInWords;
        this.AcquisitionLoanDecliningPayments.metaData.maturityDate = this.registerFormAcquisitionLoanDecliningPayments.value.maturityDate;
        console.log(this.AcquisitionLoanDecliningPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.AcquisitionLoanDecliningPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.AcquisitionLoanDecliningPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    acquisitionLoanCoborrowerEqualpaymentsRq() {
        this.AcquisitionLoanCoborrowerEqualpyments.formId = 'AcquisitionLoanCoborrowerEqualpyments';
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.signerOneEmailAddress = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.advisorEmail;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.signerTwoEmailAddress = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.lplEmail;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.interestPrincipalAmt = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.interestPrincipalAmt;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.interestRate = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.interestRate;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.primeInterestRate = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.primeInterestRate;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.noPaymentsDue = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.noPaymentsDue;

        this.AcquisitionLoanCoborrowerEqualpyments.metaData.loanAmountInWords = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.loanAmountInWords;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.principalLoanAmount = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.principalLoanAmount;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.maturityDate = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.maturityDate;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.undersignedOne = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.undersignedOne;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.addressOfBorrowerOne = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.addressOfBorrowerOne;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.undersignedTwo = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.undersignedTwo;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.addressOfBorrowerTwo = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.addressOfBorrowerTwo;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.businessName = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.businessName;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.signerThreeEmailAddress = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.coSignerEmail;
        this.AcquisitionLoanCoborrowerEqualpyments.metaData.jurisdiction = this.registerFormAcquisitionLoanCoborrowerEqualpyments.value.jurisdiction;
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.AcquisitionLoanCoborrowerEqualpyments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.AcquisitionLoanCoborrowerEqualpyments).subscribe(result => {
                dialogRef.close();
                console.log(result);
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }

    acquisitionLoanEqualPaymentsRq() {
        this.AcquisitionLoanEqualPayments.formId = 'AcquisitionLoanEqualPayments';
        this.AcquisitionLoanEqualPayments.metaData.signerOneEmailAddress = this.registerFormAcquisitionLoanEqualPayments.value.advisorEmail;
        this.AcquisitionLoanEqualPayments.metaData.signerTwoEmailAddress = this.registerFormAcquisitionLoanEqualPayments.value.lplEmail;
        this.AcquisitionLoanEqualPayments.metaData.interestPrincipalAmt = this.registerFormAcquisitionLoanEqualPayments.value.interestPrincipalAmt;
        this.AcquisitionLoanEqualPayments.metaData.interestRate = this.registerFormAcquisitionLoanEqualPayments.value.interestRate;
        this.AcquisitionLoanEqualPayments.metaData.primeInterestRate = this.registerFormAcquisitionLoanEqualPayments.value.primeInterestRate;
        this.AcquisitionLoanEqualPayments.metaData.noPaymentsDue = this.registerFormAcquisitionLoanEqualPayments.value.noPaymentsDue;

        this.AcquisitionLoanEqualPayments.metaData.principalLoanAmount = this.registerFormAcquisitionLoanEqualPayments.value.principalLoanAmount;
        this.AcquisitionLoanEqualPayments.metaData.undersignedOne = this.registerFormAcquisitionLoanEqualPayments.value.borrowersName;
        this.AcquisitionLoanEqualPayments.metaData.addressOfBorrowerOne = this.registerFormAcquisitionLoanEqualPayments.value.borrowersAddress;
        this.AcquisitionLoanEqualPayments.metaData.loanAmountInWords = this.registerFormAcquisitionLoanEqualPayments.value.loanAmountInWords;
        this.AcquisitionLoanEqualPayments.metaData.maturityDate = this.registerFormAcquisitionLoanEqualPayments.value.maturityDate;
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.AcquisitionLoanEqualPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.AcquisitionLoanEqualPayments).subscribe(result => {
                dialogRef.close();
                console.log(result);
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    vCFOAcquisitionLoanDecliningPaymentsRq() {
        this.vCFOAcquisitionLoanDecliningPayments.formId = 'vCFOAcquisitionLoanDecliningPayments';
        this.vCFOAcquisitionLoanDecliningPayments.metaData.signerOneEmailAddress = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.advisorEmail;
        this.vCFOAcquisitionLoanDecliningPayments.metaData.signerTwoEmailAddress = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.lplEmail;
        this.vCFOAcquisitionLoanDecliningPayments.metaData.interestPrincipalAmt = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.principalPayments;
        this.vCFOAcquisitionLoanDecliningPayments.metaData.interestRate = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.interestRate;
        this.vCFOAcquisitionLoanDecliningPayments.metaData.noPaymentsDue = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.noPaymentsDue;

        this.vCFOAcquisitionLoanDecliningPayments.metaData.principalLoanAmount = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.principalLoanAmount;
        this.vCFOAcquisitionLoanDecliningPayments.metaData.undersignedOne = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.borrowersName;
        this.vCFOAcquisitionLoanDecliningPayments.metaData.addressOfBorrowerOne = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.borrowersAddress;
        this.vCFOAcquisitionLoanDecliningPayments.metaData.loanAmountInWords = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.loanAmountInWords;
        this.vCFOAcquisitionLoanDecliningPayments.metaData.maturityDate = this.registerFormVCFOAcquisitionLoanDecliningPayments.value.maturityDate;
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.vCFOAcquisitionLoanDecliningPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            }, (error) => {
                dialogRef.close();
            });
        } else {
            this.service.sendDocument(this.vCFOAcquisitionLoanDecliningPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            }, (error) => {
                dialogRef.close();
            });
        }
    }
    vCFOAcquisitionLoanEqualPaymentsRq() {
        this.vCFOAcquisitionLoanEqualPayments.formId = 'vCFOAcquisitionLoanEqualPayments';
        this.vCFOAcquisitionLoanEqualPayments.metaData.signerOneEmailAddress = this.registerFormVCFOAcquisitionLoanEqualPayments.value.advisorEmail;
        this.vCFOAcquisitionLoanEqualPayments.metaData.signerTwoEmailAddress = this.registerFormVCFOAcquisitionLoanEqualPayments.value.lplEmail;
        this.vCFOAcquisitionLoanEqualPayments.metaData.interestPrincipalAmt = this.registerFormVCFOAcquisitionLoanEqualPayments.value.interestPrincipalAmt;
        this.vCFOAcquisitionLoanEqualPayments.metaData.interestRate = this.registerFormVCFOAcquisitionLoanEqualPayments.value.interestRate;
        this.vCFOAcquisitionLoanEqualPayments.metaData.primeInterestRate = this.registerFormVCFOAcquisitionLoanEqualPayments.value.primeInterestRate;
        this.vCFOAcquisitionLoanEqualPayments.metaData.noPaymentsDue = this.registerFormVCFOAcquisitionLoanEqualPayments.value.noPaymentsDue;

        this.vCFOAcquisitionLoanEqualPayments.metaData.principalLoanAmount = this.registerFormVCFOAcquisitionLoanEqualPayments.value.principalLoanAmount;
        this.vCFOAcquisitionLoanEqualPayments.metaData.undersignedOne = this.registerFormVCFOAcquisitionLoanEqualPayments.value.borrowersName;
        this.vCFOAcquisitionLoanEqualPayments.metaData.addressOfBorrowerOne = this.registerFormVCFOAcquisitionLoanEqualPayments.value.borrowersAddress;
        this.vCFOAcquisitionLoanEqualPayments.metaData.loanAmountInWords = this.registerFormVCFOAcquisitionLoanEqualPayments.value.loanAmountInWords;
        this.vCFOAcquisitionLoanEqualPayments.metaData.maturityDate = this.registerFormVCFOAcquisitionLoanEqualPayments.value.maturityDate;
        console.log(this.vCFOAcquisitionLoanEqualPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.vCFOAcquisitionLoanEqualPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.vCFOAcquisitionLoanEqualPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    oneYearForgivableRq() {
        this.OneYearForgivable.formId = 'OneYearForgivable';
        this.OneYearForgivable.metaData.signerOneEmailAddress = this.registerFormOneYearForgivable.value.advisorEmail;
        this.OneYearForgivable.metaData.signerTwoEmailAddress = this.registerFormOneYearForgivable.value.lplEmail;
        this.OneYearForgivable.metaData.annualForgivenessAmountYearOne = this.registerFormOneYearForgivable.value.annualForgivenessAmountYearOne;

        this.OneYearForgivable.metaData.principalLoanAmount = this.registerFormOneYearForgivable.value.principalLoanAmount;
        this.OneYearForgivable.metaData.undersignedOne = this.registerFormOneYearForgivable.value.borrowersName;
        this.OneYearForgivable.metaData.addressOfBorrowerOne = this.registerFormOneYearForgivable.value.borrowersAddress;
        this.OneYearForgivable.metaData.loanAmountInWords = this.registerFormOneYearForgivable.value.loanAmountInWords;
        this.OneYearForgivable.metaData.maturityDate = this.registerFormOneYearForgivable.value.maturityDate;
        console.log(this.OneYearForgivable.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });

        if (this.preview) {
            this.service.previewDocument(this.OneYearForgivable).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.OneYearForgivable).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    threeYearForgivableRq() {
        this.OneYearForgivable.formId = 'ThreeYearForgivable';
        this.OneYearForgivable.metaData.signerOneEmailAddress = this.registerFormThreeYearForgivable.value.advisorEmail;
        this.OneYearForgivable.metaData.signerTwoEmailAddress = this.registerFormThreeYearForgivable.value.lplEmail;
        this.OneYearForgivable.metaData.annualForgivenessAmountYearOne = this.registerFormThreeYearForgivable.value.annualForgivenessAmountYearOne;
        this.OneYearForgivable.metaData.annualForgivenessAmountYearTwo = this.registerFormThreeYearForgivable.value.annualForgivenessAmountYearTwo;
        this.OneYearForgivable.metaData.annualForgivenessAmountYearThree = this.registerFormThreeYearForgivable.value.annualForgivenessAmountYearThree;

        this.OneYearForgivable.metaData.principalLoanAmount = this.registerFormThreeYearForgivable.value.principalLoanAmount;
        this.OneYearForgivable.metaData.undersignedOne = this.registerFormThreeYearForgivable.value.borrowersName;
        this.OneYearForgivable.metaData.addressOfBorrowerOne = this.registerFormThreeYearForgivable.value.borrowersAddress;
        this.OneYearForgivable.metaData.loanAmountInWords = this.registerFormThreeYearForgivable.value.loanAmountInWords;
        this.OneYearForgivable.metaData.maturityDate = this.registerFormThreeYearForgivable.value.maturityDate;
        console.log(this.OneYearForgivable.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.OneYearForgivable).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.OneYearForgivable).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    fiveYearForgivableTACoBorrowerNoteRq() {
        this.FiveYearForgivableTACoBorrowerNoteObject.formId = '5YearForgivableTACoBorrowerNote';
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.signerOneEmailAddress = this.registerFormFiveYearForgivableTACoBorrowerNote.value.advisorEmail;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.signerTwoEmailAddress = this.registerFormFiveYearForgivableTACoBorrowerNote.value.lplEmail;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.representativeName = this.registerFormFiveYearForgivableTACoBorrowerNote.value.representativeName;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.representativeID = this.registerFormFiveYearForgivableTACoBorrowerNote.value.representativeID;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.annualForgivenessAmountYearOne = this.registerFormFiveYearForgivableTACoBorrowerNote.value.annualForgivenessAmountYearOne;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.annualForgivenessAmountYearTwo = this.registerFormFiveYearForgivableTACoBorrowerNote.value.annualForgivenessAmountYearTwo;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.annualForgivenessAmountYearThree = this.registerFormFiveYearForgivableTACoBorrowerNote.value.annualForgivenessAmountYearThree;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.annualForgivenessAmountYearFour = this.registerFormFiveYearForgivableTACoBorrowerNote.value.annualForgivenessAmountYearFour;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.annualForgivenessAmountYearfive = this.registerFormFiveYearForgivableTACoBorrowerNote.value.annualForgivenessAmountYearfive;

        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.loanAmountInWords = this.registerFormFiveYearForgivableTACoBorrowerNote.value.loanAmountInWords;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.principalLoanAmount = this.registerFormFiveYearForgivableTACoBorrowerNote.value.principalLoanAmount;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.maturityDate = this.registerFormFiveYearForgivableTACoBorrowerNote.value.maturityDate;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.undersignedOne = this.registerFormFiveYearForgivableTACoBorrowerNote.value.undersignedOne;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.addressOfBorrowerOne = this.registerFormFiveYearForgivableTACoBorrowerNote.value.addressOfBorrowerOne;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.undersignedTwo = this.registerFormFiveYearForgivableTACoBorrowerNote.value.undersignedTwo;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.addressOfBorrowerTwo = this.registerFormFiveYearForgivableTACoBorrowerNote.value.addressOfBorrowerTwo;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.businessName = this.registerFormFiveYearForgivableTACoBorrowerNote.value.businessName;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.signerThreeEmailAddress = this.registerFormFiveYearForgivableTACoBorrowerNote.value.coSignerEmail;
        this.FiveYearForgivableTACoBorrowerNoteObject.metaData.jurisdiction = this.registerFormFiveYearForgivableTACoBorrowerNote.value.jurisdiction;
        console.log(this.FiveYearForgivableTACoBorrowerNoteObject.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.FiveYearForgivableTACoBorrowerNoteObject).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.FiveYearForgivableTACoBorrowerNoteObject).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    fiveYearForgivableRq() {
        this.FiveYearForgivableTObject.formId = 'FiveYearForgivable';
        this.FiveYearForgivableTObject.metaData.signerOneEmailAddress = this.registerFormFiveYearForgivable.value.advisorEmail;
        this.FiveYearForgivableTObject.metaData.signerTwoEmailAddress = this.registerFormFiveYearForgivable.value.lplEmail;
        this.FiveYearForgivableTObject.metaData.annualForgivenessAmountYearOne = this.registerFormFiveYearForgivable.value.annualForgivenessAmountYearOne;
        this.FiveYearForgivableTObject.metaData.annualForgivenessAmountYearTwo = this.registerFormFiveYearForgivable.value.annualForgivenessAmountYearTwo;
        this.FiveYearForgivableTObject.metaData.annualForgivenessAmountYearThree = this.registerFormFiveYearForgivable.value.annualForgivenessAmountYearThree;
        this.FiveYearForgivableTObject.metaData.annualForgivenessAmountYearFour = this.registerFormFiveYearForgivable.value.annualForgivenessAmountYearFour;
        this.FiveYearForgivableTObject.metaData.annualForgivenessAmountYearfive = this.registerFormFiveYearForgivable.value.annualForgivenessAmountYearfive;

        this.FiveYearForgivableTObject.metaData.principalLoanAmount = this.registerFormFiveYearForgivable.value.principalLoanAmount;
        this.FiveYearForgivableTObject.metaData.undersignedOne = this.registerFormFiveYearForgivable.value.borrowersName;
        this.FiveYearForgivableTObject.metaData.addressOfBorrowerOne = this.registerFormFiveYearForgivable.value.borrowersAddress;
        this.FiveYearForgivableTObject.metaData.loanAmountInWords = this.registerFormFiveYearForgivable.value.loanAmountInWords;
        this.FiveYearForgivableTObject.metaData.maturityDate = this.registerFormFiveYearForgivable.value.maturityDate;
        console.log(this.FiveYearForgivableTObject.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.FiveYearForgivableTObject).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.FiveYearForgivableTObject).subscribe(result => {
                dialogRef.close();
                console.log(result);
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    sevenYearForgivableRq() {
        this.SevenYearForgivableTObject.formId = 'SevenYearForgivable';
        this.SevenYearForgivableTObject.metaData.signerOneEmailAddress = this.registerFormSevenYearForgivable.value.advisorEmail;
        this.SevenYearForgivableTObject.metaData.signerTwoEmailAddress = this.registerFormSevenYearForgivable.value.lplEmail;
        this.SevenYearForgivableTObject.metaData.annualForgivenessAmountYearOne = this.registerFormSevenYearForgivable.value.annualForgivenessAmountYearOne;
        this.SevenYearForgivableTObject.metaData.annualForgivenessAmountYearTwo = this.registerFormSevenYearForgivable.value.annualForgivenessAmountYearTwo;
        this.SevenYearForgivableTObject.metaData.annualForgivenessAmountYearThree = this.registerFormSevenYearForgivable.value.annualForgivenessAmountYearThree;
        this.SevenYearForgivableTObject.metaData.annualForgivenessAmountYearFour = this.registerFormSevenYearForgivable.value.annualForgivenessAmountYearFour;
        this.SevenYearForgivableTObject.metaData.annualForgivenessAmountYearfive = this.registerFormSevenYearForgivable.value.annualForgivenessAmountYearfive;
        this.SevenYearForgivableTObject.metaData.annualForgivenessAmountYearSix = this.registerFormSevenYearForgivable.value.annualForgivenessAmountYearSix;
        this.SevenYearForgivableTObject.metaData.annualForgivenessAmountYearSeven = this.registerFormSevenYearForgivable.value.annualForgivenessAmountYearSeven;

        this.SevenYearForgivableTObject.metaData.principalLoanAmount = this.registerFormSevenYearForgivable.value.principalLoanAmount;
        this.SevenYearForgivableTObject.metaData.undersignedOne = this.registerFormSevenYearForgivable.value.borrowersName;
        this.SevenYearForgivableTObject.metaData.addressOfBorrowerOne = this.registerFormSevenYearForgivable.value.borrowersAddress;
        this.SevenYearForgivableTObject.metaData.loanAmountInWords = this.registerFormSevenYearForgivable.value.loanAmountInWords;
        this.SevenYearForgivableTObject.metaData.maturityDate = this.registerFormSevenYearForgivable.value.maturityDate;
        console.log(this.SevenYearForgivableTObject.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.SevenYearForgivableTObject).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.SevenYearForgivableTObject).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    nineYearForgivableRq() {
        this.NineYearForgivableTObject.formId = 'NineYearForgivable';
        this.NineYearForgivableTObject.metaData.signerOneEmailAddress = this.registerFormNineYearForgivable.value.advisorEmail;
        this.NineYearForgivableTObject.metaData.signerTwoEmailAddress = this.registerFormNineYearForgivable.value.lplEmail;
        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearOne = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearOne;
        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearTwo = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearTwo;
        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearThree = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearThree;
        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearFour = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearFour;
        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearfive = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearfive;
        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearSix = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearSix;
        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearSeven = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearSeven;

        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearEight = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearEight;
        this.NineYearForgivableTObject.metaData.annualForgivenessAmountYearNine = this.registerFormNineYearForgivable.value.annualForgivenessAmountYearNine;

        this.NineYearForgivableTObject.metaData.principalLoanAmount = this.registerFormNineYearForgivable.value.principalLoanAmount;
        this.NineYearForgivableTObject.metaData.undersignedOne = this.registerFormNineYearForgivable.value.borrowersName;
        this.NineYearForgivableTObject.metaData.addressOfBorrowerOne = this.registerFormNineYearForgivable.value.borrowersAddress;
        this.NineYearForgivableTObject.metaData.loanAmountInWords = this.registerFormNineYearForgivable.value.loanAmountInWords;
        this.NineYearForgivableTObject.metaData.maturityDate = this.registerFormNineYearForgivable.value.maturityDate;
        console.log(this.NineYearForgivableTObject.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.NineYearForgivableTObject).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.NineYearForgivableTObject).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    tenYearForgivableRq() {
        this.TenYearForgivableTObject.formId = 'TenYearForgivable';
        this.TenYearForgivableTObject.metaData.signerOneEmailAddress = this.registerFormTenYearForgivable.value.advisorEmail;
        this.TenYearForgivableTObject.metaData.signerTwoEmailAddress = this.registerFormTenYearForgivable.value.lplEmail;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearOne = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearOne;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearTwo = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearTwo;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearThree = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearThree;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearFour = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearFour;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearfive = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearfive;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearSix = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearSix;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearSeven = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearSeven;

        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearEight = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearEight;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearNine = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearNine;
        this.TenYearForgivableTObject.metaData.annualForgivenessAmountYearTen = this.registerFormTenYearForgivable.value.annualForgivenessAmountYearTen;

        this.TenYearForgivableTObject.metaData.principalLoanAmount = this.registerFormTenYearForgivable.value.principalLoanAmount;
        this.TenYearForgivableTObject.metaData.undersignedOne = this.registerFormTenYearForgivable.value.borrowersName;
        this.TenYearForgivableTObject.metaData.addressOfBorrowerOne = this.registerFormTenYearForgivable.value.borrowersAddress;
        this.TenYearForgivableTObject.metaData.loanAmountInWords = this.registerFormTenYearForgivable.value.loanAmountInWords;
        this.TenYearForgivableTObject.metaData.maturityDate = this.registerFormTenYearForgivable.value.maturityDate;
        console.log(this.TenYearForgivableTObject.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.TenYearForgivableTObject).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.TenYearForgivableTObject).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    extRefinanceLoanDecliningPaymentsRq() {
        this.ExtRefinanceLoanDecliningPayments.formId = 'ExtRefinanceLoanDecliningPayments';
        this.ExtRefinanceLoanDecliningPayments.metaData.signerOneEmailAddress = this.registerFormExtRefinanceLoanDecliningPayments.value.advisorEmail;
        this.ExtRefinanceLoanDecliningPayments.metaData.signerTwoEmailAddress = this.registerFormExtRefinanceLoanDecliningPayments.value.lplEmail;
        this.ExtRefinanceLoanDecliningPayments.metaData.interestPrincipalAmt = this.registerFormExtRefinanceLoanDecliningPayments.value.principalPayments;
        this.ExtRefinanceLoanDecliningPayments.metaData.interestRate = this.registerFormExtRefinanceLoanDecliningPayments.value.interestRate;
        this.ExtRefinanceLoanDecliningPayments.metaData.primeInterestRate = this.registerFormExtRefinanceLoanDecliningPayments.value.primeInterestRate;
        this.ExtRefinanceLoanDecliningPayments.metaData.noPaymentsDue = this.registerFormExtRefinanceLoanDecliningPayments.value.noPaymentsDue;

        this.ExtRefinanceLoanDecliningPayments.metaData.principalLoanAmount = this.registerFormExtRefinanceLoanDecliningPayments.value.principalLoanAmount;
        this.ExtRefinanceLoanDecliningPayments.metaData.undersignedOne = this.registerFormExtRefinanceLoanDecliningPayments.value.borrowersName;
        this.ExtRefinanceLoanDecliningPayments.metaData.addressOfBorrowerOne = this.registerFormExtRefinanceLoanDecliningPayments.value.borrowersAddress;
        this.ExtRefinanceLoanDecliningPayments.metaData.loanAmountInWords = this.registerFormExtRefinanceLoanDecliningPayments.value.loanAmountInWords;
        this.ExtRefinanceLoanDecliningPayments.metaData.maturityDate = this.registerFormExtRefinanceLoanDecliningPayments.value.maturityDate;
        console.log(this.ExtRefinanceLoanDecliningPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.ExtRefinanceLoanDecliningPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.ExtRefinanceLoanDecliningPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    extRefinanceLoanEqualPaymentsRq() {
        this.ExtRefinanceLoanEqualPayments.formId = 'ExtRefinanceLoanEqualPayments';
        this.ExtRefinanceLoanEqualPayments.metaData.signerOneEmailAddress = this.registerFormExtRefinanceLoanEqualPayments.value.advisorEmail;
        this.ExtRefinanceLoanEqualPayments.metaData.signerTwoEmailAddress = this.registerFormExtRefinanceLoanEqualPayments.value.lplEmail;
        this.ExtRefinanceLoanEqualPayments.metaData.interestPrincipalAmt = this.registerFormExtRefinanceLoanEqualPayments.value.interestPrincipalAmt;
        this.ExtRefinanceLoanEqualPayments.metaData.interestRate = this.registerFormExtRefinanceLoanEqualPayments.value.interestRate;
        this.ExtRefinanceLoanEqualPayments.metaData.primeInterestRate = this.registerFormExtRefinanceLoanEqualPayments.value.primeInterestRate;
        this.ExtRefinanceLoanEqualPayments.metaData.noPaymentsDue = this.registerFormExtRefinanceLoanEqualPayments.value.noPaymentsDue;

        this.ExtRefinanceLoanEqualPayments.metaData.principalLoanAmount = this.registerFormExtRefinanceLoanEqualPayments.value.principalLoanAmount;
        this.ExtRefinanceLoanEqualPayments.metaData.undersignedOne = this.registerFormExtRefinanceLoanEqualPayments.value.borrowersName;
        this.ExtRefinanceLoanEqualPayments.metaData.addressOfBorrowerOne = this.registerFormExtRefinanceLoanEqualPayments.value.borrowersAddress;
        this.ExtRefinanceLoanEqualPayments.metaData.loanAmountInWords = this.registerFormExtRefinanceLoanEqualPayments.value.loanAmountInWords;
        this.ExtRefinanceLoanEqualPayments.metaData.maturityDate = this.registerFormExtRefinanceLoanEqualPayments.value.maturityDate;
        console.log(this.ExtRefinanceLoanEqualPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.ExtRefinanceLoanEqualPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.ExtRefinanceLoanEqualPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    growthLoanDecliningPaymentsRq() {
        this.GrowthLoanDecliningPayments.formId = 'GrowthLoanDecliningPayments';
        this.GrowthLoanDecliningPayments.metaData.signerOneEmailAddress = this.registerFormGrowthLoanDecliningPayments.value.advisorEmail;
        this.GrowthLoanDecliningPayments.metaData.signerTwoEmailAddress = this.registerFormGrowthLoanDecliningPayments.value.lplEmail;
        this.GrowthLoanDecliningPayments.metaData.interestPrincipalAmt = this.registerFormGrowthLoanDecliningPayments.value.principalPayments;
        this.GrowthLoanDecliningPayments.metaData.interestRate = this.registerFormGrowthLoanDecliningPayments.value.interestRate;
        this.GrowthLoanDecliningPayments.metaData.primeInterestRate = this.registerFormGrowthLoanDecliningPayments.value.primeInterestRate;
        this.GrowthLoanDecliningPayments.metaData.noPaymentsDue = this.registerFormGrowthLoanDecliningPayments.value.noPaymentsDue;

        this.GrowthLoanDecliningPayments.metaData.principalLoanAmount = this.registerFormGrowthLoanDecliningPayments.value.principalLoanAmount;
        this.GrowthLoanDecliningPayments.metaData.undersignedOne = this.registerFormGrowthLoanDecliningPayments.value.borrowersName;
        this.GrowthLoanDecliningPayments.metaData.addressOfBorrowerOne = this.registerFormGrowthLoanDecliningPayments.value.borrowersAddress;
        this.GrowthLoanDecliningPayments.metaData.loanAmountInWords = this.registerFormGrowthLoanDecliningPayments.value.loanAmountInWords;
        this.GrowthLoanDecliningPayments.metaData.maturityDate = this.registerFormGrowthLoanDecliningPayments.value.maturityDate;
        console.log(this.GrowthLoanDecliningPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.GrowthLoanDecliningPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.GrowthLoanDecliningPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    growthLoanEqualPaymentsRq() {
        this.GrowthLoanEqualPayments.formId = 'GrowthLoanEqualPayments';
        this.GrowthLoanEqualPayments.metaData.signerOneEmailAddress = this.registerFormGrowthLoanEqualPayments.value.advisorEmail;
        this.GrowthLoanEqualPayments.metaData.signerTwoEmailAddress = this.registerFormGrowthLoanEqualPayments.value.lplEmail;
        this.GrowthLoanEqualPayments.metaData.interestPrincipalAmt = this.registerFormGrowthLoanEqualPayments.value.interestPrincipalAmt;
        this.GrowthLoanEqualPayments.metaData.interestRate = this.registerFormGrowthLoanEqualPayments.value.interestRate;
        this.GrowthLoanEqualPayments.metaData.primeInterestRate = this.registerFormGrowthLoanEqualPayments.value.primeInterestRate;
        this.GrowthLoanEqualPayments.metaData.noPaymentsDue = this.registerFormGrowthLoanEqualPayments.value.noPaymentsDue;

        this.GrowthLoanEqualPayments.metaData.principalLoanAmount = this.registerFormGrowthLoanEqualPayments.value.principalLoanAmount;
        this.GrowthLoanEqualPayments.metaData.undersignedOne = this.registerFormGrowthLoanEqualPayments.value.borrowersName;
        this.GrowthLoanEqualPayments.metaData.addressOfBorrowerOne = this.registerFormGrowthLoanEqualPayments.value.borrowersAddress;
        this.GrowthLoanEqualPayments.metaData.loanAmountInWords = this.registerFormGrowthLoanEqualPayments.value.loanAmountInWords;
        this.GrowthLoanEqualPayments.metaData.maturityDate = this.registerFormGrowthLoanEqualPayments.value.maturityDate;
        console.log(this.GrowthLoanEqualPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.GrowthLoanEqualPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.GrowthLoanEqualPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    growthLoanWithCoborrowerEqualpaymentsRq() {
        this.GrowthLoanWithCoborrowerEqualpayments.formId = 'GrowthLoanWithCoborrowerEqualpayments';
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.signerOneEmailAddress = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.advisorEmail;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.signerTwoEmailAddress = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.lplEmail;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.interestPrincipalAmt = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.interestPrincipalAmt;
        this.GrowthLoanEqualPayments.metaData.interestRate = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.interestRate;

        this.GrowthLoanWithCoborrowerEqualpayments.metaData.primeInterestRate = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.primeInterestRate;

        this.GrowthLoanWithCoborrowerEqualpayments.metaData.loanAmountInWords = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.loanAmountInWords;

        this.GrowthLoanWithCoborrowerEqualpayments.metaData.principalLoanAmount = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.principalLoanAmount;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.maturityDate = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.maturityDate;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.undersignedOne = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.undersignedOne;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.addressOfBorrowerOne = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.addressOfBorrowerOne;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.undersignedTwo = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.undersignedTwo;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.addressOfBorrowerTwo = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.addressOfBorrowerTwo;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.businessName = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.businessName;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.signerThreeEmailAddress = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.coSignerEmail;
        this.GrowthLoanWithCoborrowerEqualpayments.metaData.jurisdiction = this.registerFormGrowthLoanWithCoborrowerEqualpayments.value.jurisdiction;
        console.log(this.GrowthLoanWithCoborrowerEqualpayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.GrowthLoanWithCoborrowerEqualpayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.GrowthLoanWithCoborrowerEqualpayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    vCFOGrowthLoanDecliningPaymentsRq() {
        this.vCFOGrowthLoanDecliningPayments.formId = 'vCFOGrowthLoanDecliningPayments';
        this.vCFOGrowthLoanDecliningPayments.metaData.signerOneEmailAddress = this.registerFormVCFOGrowthLoanDecliningPayments.value.advisorEmail;
        this.vCFOGrowthLoanDecliningPayments.metaData.signerTwoEmailAddress = this.registerFormVCFOGrowthLoanDecliningPayments.value.lplEmail;
        this.vCFOGrowthLoanDecliningPayments.metaData.interestPrincipalAmt = this.registerFormVCFOGrowthLoanDecliningPayments.value.interestPrincipalAmt;
        this.vCFOGrowthLoanDecliningPayments.metaData.interestRate = this.registerFormVCFOGrowthLoanDecliningPayments.value.interestRate;
        this.vCFOGrowthLoanDecliningPayments.metaData.primeInterestRate = this.registerFormVCFOGrowthLoanDecliningPayments.value.primeInterestRate;
        this.vCFOGrowthLoanDecliningPayments.metaData.noPaymentsDue = this.registerFormVCFOGrowthLoanDecliningPayments.value.noPaymentsDue;

        this.vCFOGrowthLoanDecliningPayments.metaData.principalLoanAmount = this.registerFormVCFOGrowthLoanDecliningPayments.value.principalLoanAmount;
        this.vCFOGrowthLoanDecliningPayments.metaData.undersignedOne = this.registerFormVCFOGrowthLoanDecliningPayments.value.borrowersName;
        this.vCFOGrowthLoanDecliningPayments.metaData.addressOfBorrowerOne = this.registerFormVCFOGrowthLoanDecliningPayments.value.borrowersAddress;
        this.vCFOGrowthLoanDecliningPayments.metaData.loanAmountInWords = this.registerFormVCFOGrowthLoanDecliningPayments.value.loanAmountInWords;
        this.vCFOGrowthLoanDecliningPayments.metaData.maturityDate = this.registerFormVCFOGrowthLoanDecliningPayments.value.maturityDate;
        console.log(this.vCFOGrowthLoanDecliningPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.vCFOGrowthLoanDecliningPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.vCFOGrowthLoanDecliningPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    vCFOGrowthLoanEqualPaymentsRq() {
        this.vCFOGrowthLoanEqualPayments.formId = 'vCFOGrowthLoanEqualPayments';
        this.vCFOGrowthLoanEqualPayments.metaData.signerOneEmailAddress = this.registerFormVCFOGrowthLoanEqualPayments.value.advisorEmail;
        this.vCFOGrowthLoanEqualPayments.metaData.signerTwoEmailAddress = this.registerFormVCFOGrowthLoanEqualPayments.value.lplEmail;
        this.vCFOGrowthLoanEqualPayments.metaData.interestPrincipalAmt = this.registerFormVCFOGrowthLoanEqualPayments.value.interestPrincipalAmt;
        this.vCFOGrowthLoanEqualPayments.metaData.interestRate = this.registerFormVCFOGrowthLoanEqualPayments.value.interestRate;
        this.vCFOGrowthLoanEqualPayments.metaData.primeInterestRate = this.registerFormVCFOGrowthLoanEqualPayments.value.primeInterestRate;
        this.vCFOGrowthLoanEqualPayments.metaData.noPaymentsDue = this.registerFormVCFOGrowthLoanEqualPayments.value.noPaymentsDue;

        this.vCFOGrowthLoanEqualPayments.metaData.principalLoanAmount = this.registerFormVCFOGrowthLoanEqualPayments.value.principalLoanAmount;
        this.vCFOGrowthLoanEqualPayments.metaData.undersignedOne = this.registerFormVCFOGrowthLoanEqualPayments.value.borrowersName;
        this.vCFOGrowthLoanEqualPayments.metaData.addressOfBorrowerOne = this.registerFormVCFOGrowthLoanEqualPayments.value.borrowersAddress;
        this.vCFOGrowthLoanEqualPayments.metaData.loanAmountInWords = this.registerFormVCFOGrowthLoanEqualPayments.value.loanAmountInWords;
        this.vCFOGrowthLoanEqualPayments.metaData.maturityDate = this.registerFormVCFOGrowthLoanEqualPayments.value.maturityDate;
        console.log(this.vCFOGrowthLoanEqualPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.vCFOGrowthLoanEqualPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.vCFOGrowthLoanEqualPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    intRefinanceLoanDecliningPaymentsRq() {
        this.IntRefinanceLoanDecliningPayments.formId = 'IntRefinanceLoanDecliningPayments';
        this.IntRefinanceLoanDecliningPayments.metaData.signerOneEmailAddress = this.registerFormIntRefinanceLoanDecliningPayments.value.advisorEmail;
        this.IntRefinanceLoanDecliningPayments.metaData.signerTwoEmailAddress = this.registerFormIntRefinanceLoanDecliningPayments.value.lplEmail;
        this.IntRefinanceLoanDecliningPayments.metaData.interestPrincipalAmt = this.registerFormIntRefinanceLoanDecliningPayments.value.principalPayments;
        this.IntRefinanceLoanDecliningPayments.metaData.interestRate = this.registerFormIntRefinanceLoanDecliningPayments.value.interestRate;
        this.IntRefinanceLoanDecliningPayments.metaData.noPaymentsDue = this.registerFormIntRefinanceLoanDecliningPayments.value.noPaymentsDue;

        this.IntRefinanceLoanDecliningPayments.metaData.principalLoanAmount = this.registerFormIntRefinanceLoanDecliningPayments.value.principalLoanAmount;
        this.IntRefinanceLoanDecliningPayments.metaData.undersignedOne = this.registerFormIntRefinanceLoanDecliningPayments.value.borrowersName;
        this.IntRefinanceLoanDecliningPayments.metaData.addressOfBorrowerOne = this.registerFormIntRefinanceLoanDecliningPayments.value.borrowersAddress;
        this.IntRefinanceLoanDecliningPayments.metaData.loanAmountInWords = this.registerFormIntRefinanceLoanDecliningPayments.value.loanAmountInWords;
        this.IntRefinanceLoanDecliningPayments.metaData.maturityDate = this.registerFormIntRefinanceLoanDecliningPayments.value.maturityDate;
        console.log(this.IntRefinanceLoanDecliningPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.IntRefinanceLoanDecliningPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.IntRefinanceLoanDecliningPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    intRefinanceLoanEqualPaymentsRq() {
        this.IntRefinanceLoanEqualPaymentsRq.formId = 'IntRefinanceLoanEqualPayments';
        this.IntRefinanceLoanEqualPaymentsRq.metaData.signerOneEmailAddress = this.registerFormIntRefinanceLoanEqualPayments.value.advisorEmail;
        this.IntRefinanceLoanEqualPaymentsRq.metaData.signerTwoEmailAddress = this.registerFormIntRefinanceLoanEqualPayments.value.lplEmail;
        this.IntRefinanceLoanEqualPaymentsRq.metaData.interestPrincipalAmt = this.registerFormIntRefinanceLoanEqualPayments.value.interestPrincipalAmt;
        this.IntRefinanceLoanEqualPaymentsRq.metaData.interestRate = this.registerFormIntRefinanceLoanEqualPayments.value.interestRate;
        this.IntRefinanceLoanEqualPaymentsRq.metaData.primeInterestRate = this.registerFormIntRefinanceLoanEqualPayments.value.primeInterestRate;

        this.IntRefinanceLoanEqualPaymentsRq.metaData.principalLoanAmount = this.registerFormIntRefinanceLoanEqualPayments.value.principalLoanAmount;
        this.IntRefinanceLoanEqualPaymentsRq.metaData.undersignedOne = this.registerFormIntRefinanceLoanEqualPayments.value.borrowersName;
        this.IntRefinanceLoanEqualPaymentsRq.metaData.addressOfBorrowerOne = this.registerFormIntRefinanceLoanEqualPayments.value.borrowersAddress;
        this.IntRefinanceLoanEqualPaymentsRq.metaData.loanAmountInWords = this.registerFormIntRefinanceLoanEqualPayments.value.loanAmountInWords;
        this.IntRefinanceLoanEqualPaymentsRq.metaData.maturityDate = this.registerFormIntRefinanceLoanEqualPayments.value.maturityDate;
        console.log(this.IntRefinanceLoanEqualPaymentsRq.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });

        if (this.preview) {
            this.service.previewDocument(this.IntRefinanceLoanEqualPaymentsRq).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.IntRefinanceLoanEqualPaymentsRq).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }

    virtualCFOExtRefinanceLoanDecliningPaymentsRq() {
        this.VirtualCFOExtRefinanceLoanDecliningPayments.formId = 'VirtualCFOExtRefinanceLoanDecliningPayments';
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.signerOneEmailAddress = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.advisorEmail;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.signerTwoEmailAddress = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.lplEmail;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.interestPrincipalAmt = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.interestPrincipalAmt;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.interestRate = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.interestRate;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.primeInterestRate = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.primeInterestRate;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.noPaymentsDue = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.noPaymentsDue;

        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.principalLoanAmount = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.principalLoanAmount;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.undersignedOne = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.borrowersName;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.addressOfBorrowerOne = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.borrowersAddress;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.loanAmountInWords = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.loanAmountInWords;
        this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData.maturityDate = this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.value.maturityDate;
        console.log(this.VirtualCFOExtRefinanceLoanDecliningPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.VirtualCFOExtRefinanceLoanDecliningPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.VirtualCFOExtRefinanceLoanDecliningPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    virtualCFOExtRefinanceLoanEqualPaymentsRq() {
        this.VirtualCFOExtRefinanceLoanEqualPayments.formId = 'VirtualCFOExtRefinanceLoanEqualPayments';
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.signerOneEmailAddress = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.advisorEmail;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.signerTwoEmailAddress = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.lplEmail;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.interestPrincipalAmt = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.interestPrincipalAmt;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.interestRate = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.interestRate;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.primeInterestRate = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.primeInterestRate;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.noPaymentsDue = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.noPaymentsDue;

        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.principalLoanAmount = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.principalLoanAmount;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.undersignedOne = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.borrowersName;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.addressOfBorrowerOne = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.borrowersAddress;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.loanAmountInWords = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.loanAmountInWords;
        this.VirtualCFOExtRefinanceLoanEqualPayments.metaData.maturityDate = this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.value.maturityDate;
        console.log(this.VirtualCFOExtRefinanceLoanEqualPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.VirtualCFOExtRefinanceLoanEqualPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.VirtualCFOExtRefinanceLoanEqualPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }

    virtualCFOIntRefinanceDecliningPaymentsRq() {
        this.VirtualCFOIntRefinanceDecliningPayments.formId = 'VirtualCFOIntRefinanceDecliningPayments';
        this.VirtualCFOIntRefinanceDecliningPayments.metaData.signerOneEmailAddress = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.advisorEmail;
        this.VirtualCFOIntRefinanceDecliningPayments.metaData.signerTwoEmailAddress = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.lplEmail;
        this.VirtualCFOIntRefinanceDecliningPayments.metaData.interestPrincipalAmt = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.principalPayments;
        this.VirtualCFOIntRefinanceDecliningPayments.metaData.interestRate = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.interestRate;

        this.VirtualCFOIntRefinanceDecliningPayments.metaData.principalLoanAmount = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.principalLoanAmount;
        this.VirtualCFOIntRefinanceDecliningPayments.metaData.undersignedOne = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.borrowersName;
        this.VirtualCFOIntRefinanceDecliningPayments.metaData.addressOfBorrowerOne = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.borrowersAddress;
        this.VirtualCFOIntRefinanceDecliningPayments.metaData.loanAmountInWords = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.loanAmountInWords;
        this.VirtualCFOIntRefinanceDecliningPayments.metaData.maturityDate = this.registerFormVirtualCFOIntRefinanceDecliningPayments.value.maturityDate;
        console.log(this.VirtualCFOIntRefinanceDecliningPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.VirtualCFOIntRefinanceDecliningPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.VirtualCFOIntRefinanceDecliningPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }
    virtualCFOIntRefinanceEqualPaymentsRq() {
        this.VirtualCFOIntRefinanceEqualPayments.formId = 'VirtualCFOIntRefinanceEqualPayments';
        this.VirtualCFOIntRefinanceEqualPayments.metaData.signerOneEmailAddress = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.advisorEmail;
        this.VirtualCFOIntRefinanceEqualPayments.metaData.signerTwoEmailAddress = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.lplEmail;
        this.VirtualCFOIntRefinanceEqualPayments.metaData.interestPrincipalAmt = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.interestPrincipalAmt;
        this.VirtualCFOIntRefinanceEqualPayments.metaData.interestRate = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.interestRate;

        this.VirtualCFOIntRefinanceEqualPayments.metaData.principalLoanAmount = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.principalLoanAmount;
        this.VirtualCFOIntRefinanceEqualPayments.metaData.undersignedOne = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.borrowersName;
        this.VirtualCFOIntRefinanceEqualPayments.metaData.addressOfBorrowerOne = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.borrowersAddress;
        this.VirtualCFOIntRefinanceEqualPayments.metaData.loanAmountInWords = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.loanAmountInWords;
        this.VirtualCFOIntRefinanceEqualPayments.metaData.maturityDate = this.registerFormVirtualCFOIntRefinanceEqualPayments.value.maturityDate;
        console.log(this.VirtualCFOIntRefinanceEqualPayments.metaData);
        const dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true
        });
        if (this.preview) {
            this.service.previewDocument(this.VirtualCFOIntRefinanceEqualPayments).subscribe(result => {
                if (result['message'] === 'success') {
                    dialogRef.close();
                    this.webViewer(result);
                }
            },
                (error) => {
                    dialogRef.close();
                });
        } else {
            this.service.sendDocument(this.VirtualCFOIntRefinanceEqualPayments).subscribe(result => {
                console.log(result);
                dialogRef.close();
            },
                (error) => {
                    dialogRef.close();
                });
        }
    }

    // TODO:Add field validation
    onPreview(obj) {
        this.preview = true;
        this.requestBuilder();
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

    prefillLoanData(data: any): void {
        console.log('loan data: ' + data);
        const formattedDate = this.datepipe.transform(data.maturityDate, 'MM-dd-yyyy');
        const converter = require('number-to-words');
        const numberToWords = converter.toWords(data.loanAmount);
        switch (this.gridType) {
            case '1':
                this.registerFormLineOfCredit.patchValue({
                    lineOfCreditLimit: data.loanAmount,
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '2':
                this.registerFormWorkingCapitalLoanOver75K.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '3':
                if (data.advList.length === 2) {
                    this.registerFormWorkingCapitalLoanCoborrowerTemplate.patchValue({
                        principalLoanAmount: data.loanAmount,
                        loanAmountInWords: numberToWords,
                        maturityDate: formattedDate,
                        undersignedOne: data.advList[0].advisorName,
                        addressOfBorrowerOne: data.advList[0].advisorStreet + ' ' + data.advList[0].advisorCity + ' ' + data.advList[0].advisorState,
                        undersignedTwo: data.advList[1].advisorName,
                        addressOfBorrowerTwo: data.advList[1].advisorStreet + ' ' + data.advList[1].advisorCity + ' ' + data.advList[1].advisorState,
                        advisorEmail: data.advList[0].email,
                        coSignerEmail: data.advList[1].email
                    });
                }
                break;
            case '4':
                this.registerFormAcquisitionLoanDecliningPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '5':
                if (data.advList.length === 2) {
                    this.registerFormAcquisitionLoanCoborrowerEqualpyments.patchValue({
                        principalLoanAmount: data.loanAmount,
                        loanAmountInWords: numberToWords,
                        maturityDate: formattedDate,
                        undersignedOne: data.advList[0].advisorName,
                        addressOfBorrowerOne: data.advList[0].advisorStreet + ' ' + data.advList[0].advisorCity + ' ' + data.advList[0].advisorState,
                        undersignedTwo: data.advList[1].advisorName,
                        addressOfBorrowerTwo: data.advList[1].advisorStreet + ' ' + data.advList[1].advisorCity + ' ' + data.advList[1].advisorState,
                        advisorEmail: data.advList[0].email,
                        coSignerEmail: data.advList[1].email
                    });
                }
                break;
            case '6':
                this.registerFormAcquisitionLoanEqualPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '7':
                this.registerFormVCFOAcquisitionLoanDecliningPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '8':
                this.registerFormVCFOAcquisitionLoanEqualPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '9':
                this.registerFormOneYearForgivable.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '10':
                this.registerFormThreeYearForgivable.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '11':
                if (data.advList.length === 2) {
                    this.registerFormFiveYearForgivableTACoBorrowerNote.patchValue({
                        principalLoanAmount: data.loanAmount,
                        loanAmountInWords: numberToWords,
                        maturityDate: formattedDate,
                        undersignedOne: data.advList[0].advisorName,
                        addressOfBorrowerOne: data.advList[0].advisorStreet + ' ' + data.advList[0].advisorCity + ' ' + data.advList[0].advisorState,
                        undersignedTwo: data.advList[1].advisorName,
                        addressOfBorrowerTwo: data.advList[1].advisorStreet + ' ' + data.advList[1].advisorCity + ' ' + data.advList[1].advisorState,
                        advisorEmail: data.advList[0].email,
                        coSignerEmail: data.advList[1].email
                    });
                }
                break;
            case '12':
                this.registerFormFiveYearForgivable.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '13':
                this.registerFormSevenYearForgivable.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '14':
                this.registerFormNineYearForgivable.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '15':
                this.registerFormTenYearForgivable.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '16':
                this.registerFormExtRefinanceLoanDecliningPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '17':
                this.registerFormExtRefinanceLoanEqualPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '18':
                this.registerFormGrowthLoanDecliningPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '19':
                this.registerFormGrowthLoanEqualPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '20':
                if (data.advList.length === 2) {
                    this.registerFormGrowthLoanWithCoborrowerEqualpayments.patchValue({
                        principalLoanAmount: data.loanAmount,
                        loanAmountInWords: numberToWords,
                        maturityDate: formattedDate,
                        undersignedOne: data.advList[0].advisorName,
                        addressOfBorrowerOne: data.advList[0].advisorStreet + ' ' + data.advList[0].advisorCity + ' ' + data.advList[0].advisorState,
                        undersignedTwo: data.advList[1].advisorName,
                        addressOfBorrowerTwo: data.advList[1].advisorStreet + ' ' + data.advList[1].advisorCity + ' ' + data.advList[1].advisorState,
                        advisorEmail: data.advList[0].email,
                        coSignerEmail: data.advList[1].email
                    });
                }
                break;
            case '21':
                console.log('vCFOGrowthLoanDecliningPayments');
                this.registerFormVCFOGrowthLoanDecliningPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '22':
                console.log('vCFOGrowthLoanEqualPayments');
                this.registerFormVCFOGrowthLoanEqualPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '23':
                console.log('intRefinanceLoanDecliningPayments');
                this.registerFormIntRefinanceLoanDecliningPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '24':
                console.log('intRefinanceLoanEqualPayments');
                this.registerFormIntRefinanceLoanEqualPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '25':
                console.log('virtualCFOExtRefinanceLoanDecliningPayments');
                this.registerFormVirtualCFOExtRefinanceLoanDecliningPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '26':
                console.log('virtualCFOExtRefinanceLoanEqualPayments');
                this.registerFormVirtualCFOExtRefinanceLoanEqualPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '27':
                console.log('virtualCFOIntRefinanceDecliningPayments');
                this.registerFormVirtualCFOIntRefinanceDecliningPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            case '28':
                console.log('virtualCFOIntRefinanceEqualPayments');
                this.registerFormVirtualCFOIntRefinanceEqualPayments.patchValue({
                    principalLoanAmount: data.loanAmount,
                    loanAmountInWords: numberToWords,
                    borrowersAddress: data.advisorStreet + ' ' + data.advisorCity + ' ' + data.advisorState,
                    maturityDate: formattedDate,
                    borrowersName: data.advisorName,
                    advisorEmail: data.email
                });
                break;
            default:
                console.log('No form provided');
                break;
        }

    }
}
