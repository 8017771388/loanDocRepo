import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpService } from '../../_shared/services/http.services';
import { AppSettings } from '../../_shared/constants/api-constant';


@Injectable({
  providedIn: 'root'
})
export class PromissoryDocService {

    constructor(private httpService: HttpService, private http: HttpClient) { }
    getData() {
        //var response = {
        //    status: "Success",
        //    statusMessage: "",
        //    data: [
        //        {
        //            repID:"CCCA",
        //            advisorName: "SHERYL KISER",
        //            advisorAddress: "W233N2080 RIDGEVIEW PKWY",
        //            advisorCity: "WAUKESHA",
        //            advisorState:"WI",
        //            advisorZip: "53188-1025",
        //            loanAmount: "365000",
        //            termLength: "5",
        //            advisorEmail: "test@abc.com",
        //            lplEmail:"test@lpl.com",
        //            year1PrincipleForgiveness:"73000.00",
        //            year2PrincipleForgiveness: "73000.00",
        //            year3PrincipleForgiveness: "73000.00",
        //            year4PrincipleForgiveness: "73000.00",
        //            year5PrincipleForgiveness: "73000.00",
        //            year6PrincipleForgiveness: "",
        //            year7PrincipleForgiveness: "",
        //            status: "Yet to send"

        //        },
        //        {
        //            repID: "T2XA",
        //            advisorName: "MARK CHAVEZ",
        //            advisorAddress: "500 N SHORELINE BLVD",
        //            advisorCity: "CORPUS CHRISTI",
        //            advisorState: "TX",
        //            advisorZip: "78401-0337",
        //            loanAmount: "573000",
        //            termLength: "7",
        //            advisorEmail: "test@abc.com",
        //            lplEmail: "test@lpl.com",
        //            year1PrincipleForgiveness: "81857.14",
        //            year2PrincipleForgiveness: "81857.14",
        //            year3PrincipleForgiveness: "81857.14",
        //            year4PrincipleForgiveness: "81857.14",
        //            year5PrincipleForgiveness: "81857.14",
        //            year6PrincipleForgiveness: "81857.14",
        //            year7PrincipleForgiveness: "81857.14",
        //            status: "Yet to send"

        //        },
        //        {
        //            repID: "C1QA",
        //            advisorName: "DAVID ANSBRO",
        //            advisorAddress: "2245 GATEWAY ACCESS PT",
        //            advisorCity: "RALEIGH",
        //            advisorState: "NC",
        //            advisorZip: "27607-3078",
        //            loanAmount: "206989.23",
        //            termLength: "7",
        //            advisorEmail: "test@abc.com",
        //            lplEmail: "test@lpl.com",
        //            year1PrincipleForgiveness: "29569.89",
        //            year2PrincipleForgiveness: "29569.89",
        //            year3PrincipleForgiveness: "29569.89",
        //            year4PrincipleForgiveness: "29569.89",
        //            year5PrincipleForgiveness: "29569.89",
        //            year6PrincipleForgiveness: "29569.89",
        //            year7PrincipleForgiveness: "29569.89",

        //            status: "Yet to send"
        //        },
        //        {
        //            repID: "N3VB",
        //            advisorName: "JEREMIAH KNOX",
        //            advisorAddress: "2245 GATEWAY ACCESS PT",
        //            advisorCity: "RALEIGH",
        //            advisorState: "NC",
        //            advisorZip: "27607-3078",
        //            loanAmount: "63019.85",
        //            termLength: "7",
        //            advisorEmail: "test@abc.com",
        //            lplEmail: "test@lpl.com",
        //            year1PrincipleForgiveness: "9002.84",
        //            year2PrincipleForgiveness: "9002.84",
        //            year3PrincipleForgiveness: "9002.84",
        //            year4PrincipleForgiveness: "9002.84",
        //            year5PrincipleForgiveness: "9002.84",
        //            year6PrincipleForgiveness: "9002.84",
        //            year7PrincipleForgiveness: "9002.84",
        //            status: "Yet to send"


        //        },
        //        {
        //            repID: "H11A",
        //            advisorName: "JOHN BOTTEGA",
        //            advisorAddress: "2245 GATEWAY ACCESS PT",
        //            advisorCity: "RALEIGH",
        //            advisorState: "NC",
        //            advisorZip: "27607-3078",
        //            loanAmount: "20104.12",
        //            termLength: "7",
        //            advisorEmail: "test@abc.com",
        //            lplEmail: "test@lpl.com",
        //            year1PrincipleForgiveness: "2872.02",
        //            year2PrincipleForgiveness: "2872.02",
        //            year3PrincipleForgiveness: "2872.02",
        //            year4PrincipleForgiveness: "2872.02",
        //            year5PrincipleForgiveness: "2872.02",
        //            year6PrincipleForgiveness: "2872.02",
        //            year7PrincipleForgiveness: "2872.02",
        //            status:"Yet to send"


        //        },
        //    ]
        //}
        //return response;
        return this.httpService
            .get(AppSettings.getRecordsFromCSV, '', AppSettings.apiKey)
            .pipe(map(response => response));
    }
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

}
