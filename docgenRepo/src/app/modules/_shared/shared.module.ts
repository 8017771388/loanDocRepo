import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { SafeHtmlPipe } from './pipes/pipe.safehtml';
import {BooleanConverterpipe} from './pipes/pipe.boolean.converter';
import { UpperCaseDirective } from './directives/uppercase';
import { PhoneNumberDirective } from './directives/phoneNumber';
import { ZipConverterDirective } from './directives/zipConverter';
import { FilterPipe } from './pipes/pipe.filter';
import { BooleanFilterPipe } from './pipes/pipe.boolean.filter';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
// import { DxGridComponent } from './components/dxGrid/dxgrid.component';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { AuthGuardService } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { DueDatePipe } from './pipes/due-date.pipe';
import { ShortNamePipe } from './pipes/short-name.pipe';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { OneDigitDecimaNumberDirective } from './directives/decimalValidator';
import { CommitmentTemplateComponent } from './components/commitment-template/commitment-template.component';
import { LoanSearchComponent } from './components/loan-search/loan-search.component';

import { PdftronViewerModule } from '../pdftron-viewer/pdftron-viewer.module';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material';

@NgModule({
    imports: [
        MatDialogModule,
        MatProgressSpinnerModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DxDataGridModule,
        DxSelectBoxModule,
        NgSelectModule,
        BsDatepickerModule.forRoot(),
        DragDropModule,
        PdftronViewerModule,
        TypeaheadModule.forRoot(),
        TypeaheadModule.forRoot()
    ],
    declarations: [
        SafeHtmlPipe,
        BooleanConverterpipe,
        UpperCaseDirective,
        PhoneNumberDirective,
        ZipConverterDirective,
        FilterPipe,
        BooleanFilterPipe,
        HeaderComponent,
        SideBarComponent,
        SignOutComponent,
        DueDatePipe,
        ShortNamePipe,
        ConfirmModalComponent,
        OneDigitDecimaNumberDirective,
        CommitmentTemplateComponent,
        LoanSearchComponent,
        ProgressSpinnerComponent
    ],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        UpperCaseDirective,
        PhoneNumberDirective,
        OneDigitDecimaNumberDirective,
        ZipConverterDirective,
        FilterPipe,
        BooleanFilterPipe,
        BooleanConverterpipe,
        DueDatePipe,
        ShortNamePipe,
        HeaderComponent,
        SideBarComponent,
        SignOutComponent,
        CommitmentTemplateComponent,
        LoanSearchComponent

    ],
    entryComponents: [
        ConfirmModalComponent, CommitmentTemplateComponent, ProgressSpinnerComponent
    ],
    providers: [AuthGuardService]
})

export class SharedModule { }
