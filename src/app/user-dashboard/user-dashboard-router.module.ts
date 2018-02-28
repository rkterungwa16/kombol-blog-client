import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UserDashboardRouterModule { }
