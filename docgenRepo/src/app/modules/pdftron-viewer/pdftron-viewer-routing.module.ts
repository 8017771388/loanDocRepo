import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitmentTemplateComponent } from '../_shared/components/commitment-template/commitment-template.component';


const routes: Routes = [
  
  {
    path: "preview",
        component: CommitmentTemplateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdftronViewerRoutingModule { }
