import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdftronViewerRoutingModule } from './pdftron-viewer-routing.module';
import { WebViewerComponent } from './webViewer/webviewer.component';


@NgModule({
    declarations: [WebViewerComponent],
    imports: [
        CommonModule,
        PdftronViewerRoutingModule
    ],
    exports: [
        WebViewerComponent
        ],
  providers: []
})
export class PdftronViewerModule { }
