import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../_shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DxDataGridModule } from 'devextreme-angular';
import { UiSwitchModule } from 'ngx-ui-switch';
import { HomeService } from './services/home.service';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { OrderModule } from 'ngx-order-pipe';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
        HomePageComponent
        
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DxDataGridModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    UiSwitchModule.forRoot({
      size: 'small',
      color: '#3f681c',
      switchColor: '#ffffff',
      defaultBgColor: '#ecebeb',
      defaultBoColor : '#094f00',
      checkedLabel: 'Deselect',
      uncheckedLabel: 'Select'
    }),
    TypeaheadModule.forRoot(),
    OrderModule,
    NgSelectModule
  ],
  providers : [
    HomeService
  ],
  entryComponents : []
})
export class HomeModule { }

