import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../../_shared/services/http.services';
import { AppSettings } from '../../_shared/constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

   constructor(private httpService: HttpService, private http: HttpClient) {}

    // sendDocument(param) { return this.httpService
    //     .post('https://localhost:44317/send-document', param, AppSettings.apiKey)
    //     .pipe(map(response => response));
    // }
    //
    // previewDocument(param) { return this.httpService
    //     .post('https://localhost:44317/preview-document', param, AppSettings.apiKey)
    //     .pipe(map(response => response));
    // }
    //
    // getLoanInfo(loanID) {
    //     let url = 'https://localhost:44317/search-loan/' + loanID;
    //     const separator = url.indexOf('?') === -1 ? '?' : '&';
    //     url = url + separator + 'noCache=' + new Date().getTime();
    //
    //     return this.httpService.get(url, {}).pipe(
    //         map((resp: Response) => {
    //             return resp['data'];
    //         })
    //     );
    // }

    sendDocument(param) {
        return this.httpService
            .post(AppSettings.sendDocument, param, AppSettings.apiKey)
            .pipe(map(response => response));
    }

    previewDocument(param) {
        return this.httpService
            .post(AppSettings.previewDoc, param, AppSettings.apiKey)
       .pipe(map(response => response));
    }

    getLoanInfo(loanID) {
        let url = AppSettings.getLoanInfo + loanID;
        const separator = url.indexOf('?') === -1 ? '?' : '&';
        url = url + separator + 'noCache=' + new Date().getTime();

        return this.httpService.get(url, {}, AppSettings.apiKey).pipe(
            map((resp: Response) => {
                return resp['data'];
            })
        );
    }

   }
