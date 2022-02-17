import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

// import { AuthGuardService } from '../_shared/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
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
export class HomeRoutingModule { }
