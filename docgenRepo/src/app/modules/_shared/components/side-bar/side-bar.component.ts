import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppSettings } from '../../../_shared/constants/api-constant';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent  {
  public status: any = false;
  public alladvisor: string;
  public currentUser: any;

  @Output() navChange = new EventEmitter<any>();
  // constructor(private userInfo : UserInfo) {
  //   this.currentUser = this.userInfo._currentUserFn();
  //   this.currentUser.groups.forEach(value => {
  //     if (value.name.toLowerCase() == this.cfoAnalyst.toLowerCase() ) {
  //       this.userRole = AppSettings.adGroup.cfoAnalyst;
  //     }
  //   });
  // }
  //
  // ngOnInit() {
  //   this.alladvisor = 'alladvisor';
  // }
  //
  clickEvent() {
    this.status = !this.status;
  }

  gridData(param) {
    this.alladvisor = param;
    this.navChange.emit({type: param});
  }
}
