import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentCenterService } from './services/document-center.service';
import { DocumentCenterRoutingModule } from './document-center.routing.module';
//import { BrowserModule } from '@angular/platform-browser' 
import { DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxListModule } from 'devextreme-angular';
import { ModalModule, BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
//import { CurrencyPipe, DecimalPipe } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [DocumentListComponent],
  imports: [
    CommonModule,
    DocumentCenterRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxListModule,
    
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
    
  ],
  exports: [
    DocumentListComponent
  ],
  providers: [DocumentCenterService]


})
export class DocumentCenterModule { }
