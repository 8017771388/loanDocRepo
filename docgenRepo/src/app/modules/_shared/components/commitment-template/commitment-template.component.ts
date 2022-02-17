import { Component, OnInit, Input, Output } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { HomeService } from "../../../home/services/home.service";
@Component({
  selector: 'app-commitment-template',
  templateUrl: './commitment-template.component.html',
  styleUrls: ['./commitment-template.component.scss']
})
export class CommitmentTemplateComponent implements OnInit {
    public base64: any;

    constructor(
        public bsModalRef: BsModalRef,
        public modalService: BsModalService,
        public homeService: HomeService) { }

    ngOnInit() {}

}
