import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'post/:id', component: BlogDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UserDashboardRouterModule { }
