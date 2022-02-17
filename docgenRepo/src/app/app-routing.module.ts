import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './modules/_shared/services/authentication.service';
import { ErrorComponent } from './modules/error/component/error.component';
import { SignOutComponent } from './modules/_shared/components/sign-out/sign-out.component';

const routes: Routes = [
  { path: '', redirectTo: '/document-center', pathMatch: 'full' },
  {
    path: 'document-center',
    loadChildren: './modules/document-center/document-center.module#DocumentCenterModule',
    resolve: { auth: AuthenticationService }
  },
  {
      path: 'home',
      loadChildren: './modules/home/home.module#HomeModule',
      resolve: { auth: AuthenticationService }
    },
    {
        path: 'promissory-note',
        loadChildren: './modules/promissory-doc/promissory-doc.module#PromissoryDocModule',
        //loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        resolve: { auth: AuthenticationService }
    },

// {
//   path: 'master-library',
//   loadChildren: './modules/master-library/master-library.module#MasterLibraryModule',
//   resolve: { auth: AuthenticationService }
// },
{ path: 'error', component: ErrorComponent, data: { title: 'Error' } },
{ path: 'signout', component : SignOutComponent},
{ path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
