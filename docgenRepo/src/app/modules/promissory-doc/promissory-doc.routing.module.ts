import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromissoryNoteComponent } from './components/promissory-note/promissory-note.component';

const routes: Routes = [
    {
        path: '',
        component: PromissoryNoteComponent
    }
    // {
    //     path: 'build-core-plan/:repid/:advisorname/:cfoname/:cfousername',
    //     component: BuildCorePlanComponent
    // },
    // {
    //     path: 'core-plan/:repid/:advisor',
    //     component: CorePlanComponent,
    //     // canActivate: [AuthGuardService],
    //     // data : {role : ['Guest']}
    // },
    // {
    //     path: 'home-calendar',
    //     component: HomeCalendarComponent
    //
    // },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PromissoryDocRoutingModule { }
