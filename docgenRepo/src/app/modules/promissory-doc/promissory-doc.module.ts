import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromissoryDocRoutingModule } from './promissory-doc.routing.module';
import { SharedModule } from '../_shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PromissoryNoteComponent } from './components/promissory-note/promissory-note.component';
//import { DxDataGridModule } from 'devextreme-angular';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PromissoryDocService } from './services/promissory-doc.service';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { OrderModule } from 'ngx-order-pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';


@NgModule({
    declarations: [PromissoryNoteComponent],
    imports: [
        CommonModule,
        PromissoryDocRoutingModule,
        SharedModule,
        DxDataGridModule,
        DxSelectBoxModule,
        BsDatepickerModule.forRoot(),
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        UiSwitchModule.forRoot({
            size: 'small',
            color: '#3f681c',
            switchColor: '#ffffff',
            defaultBgColor: '#ecebeb',
            defaultBoColor: '#094f00',
            checkedLabel: 'Deselect',
            uncheckedLabel: 'Select'
        }),
        TypeaheadModule.forRoot(),
        OrderModule,
        NgSelectModule
    ],
    providers: [
        PromissoryDocService
    ],
    entryComponents: []
})
export class PromissoryDocModule { }
