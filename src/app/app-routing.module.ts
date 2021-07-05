import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModule, MainLayoutComponent } from 'sr-fe-core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'sr-fe-core#AuthenticationModule'
    //  loadChildren: () => AuthenticationModule
  },
  {
    path: 'simple-retail',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'sr-fe-core#DashboardModule',
        // loadChildren: () => DashboardModule
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'simple-retail/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
