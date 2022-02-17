import { Component, ViewChild, OnInit, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../../home/services/home.service';


declare const WebViewer: any;

@Component({
  selector: 'app-webviewer',
  template: '<div #viewer></div>',
  styles: ['div { width: 100%; height: 100%; }']
})
export class WebViewerComponent implements AfterViewInit {
    @ViewChild('viewer', { static: false }) viewer: ElementRef;

    @Input() base64: any;

    constructor(private homeService: HomeService) {}
    wvInstance: any;
    selectedFileInfo: {
        documentId: string,
        version: string
    };

    fileContent: {
        fileBlobContent: null,
        fileName: string
    };

    isFileDownloaded = false;
    hasLoaded = false;
    pageLoading = true;


  ngAfterViewInit(): void {
    this.pageLoading = true;
    console.log('loading pdftron web viewer');
    WebViewer({
        // tslint:disable-next-line:max-line-length
        licenseKey: 'LPL Financial LLC(lpl.com):ENTERP:ClientWorks/CLRWorks::B+:AMS(20201204):25B524820427560A3360B13AC982737820611FF9C778FD75049FCCE21C6450779986BEF5C7',
        path: 'pdftron-lib/lib',
        // initialDoc: 'pdftron-lib/files/webviewer-demo-annotated.pdf',
        forceClientSideInit: true
    }, this.viewer.nativeElement).then(instance => {
        instance.disableElements([ 'dropdown' ]);
        instance.setSortStrategy('position');
        this.wvInstance = instance;
        instance.loadDocument(this.base64ToBlob(this.base64), { filename: 'test.pdf' });
    });
  }

    base64ToBlob(base64) {
        const binaryString = window.atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; ++i) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new Blob([bytes], { type: 'application/pdf' });
    }


}
