import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from './components/document-list/document-list.component';

// import { AuthGuardService } from '../_shared/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DocumentListComponent
    }
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentCenterRoutingModule { }
