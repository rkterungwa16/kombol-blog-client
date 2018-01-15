import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserDashboardRouterModule } from './user-dashboard-router.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { LikeBlogPostComponent } from './like-blog-post/like-blog-post.component';

@NgModule({
  imports: [
    CommonModule,
    UserDashboardRouterModule,
    RouterModule
  ],
  declarations: [
    UserDashboardComponent,
    LikeBlogPostComponent
  ]
})
export class UserDashboardModule { }
