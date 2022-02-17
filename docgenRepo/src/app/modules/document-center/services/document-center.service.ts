import { Injectable } from '@angular/core';
import { HttpService } from "../../_shared/services/http.services";
import { AppSettings } from "../../_shared/constants/api-constant";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DocumentCenterService {

  constructor(private HttpService: HttpService ) { }

  getOfferDocument(param){
    var url = AppSettings.getOffersHistory;
    url = url + "?" + "userName=" + param.username + "&isAdmin=" + param.isAdmin + "&pageSize=" + param.pageSize + "&pageNumber=" + param.pageNumber;
    console.log('data', url);
    return this.HttpService
    .get(url)
    .pipe(map((response) => response));

  }
  getCreatedByList(param){
    var url = AppSettings.getCreatedByList;
    url = url + "?" + "userName=" + param.username + "&isAdmin=" + param.isAdmin;
      //url = url + "?" + "offerId=" + id;
      return this.HttpService
          .get(url)
          .pipe(map((response) => response));
  }
}
