import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserDashboardRouterModule } from './user-dashboard-router.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { LikeBlogPostComponent } from './like-blog-post/like-blog-post.component';
import { PostEditDeleteComponent } from './post-edit-delete/post-edit-delete.component';
import { CommentOnBlogPostComponent } from './comment-on-blog-post/comment-on-blog-post.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    UserDashboardRouterModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    UserDashboardComponent,
    LikeBlogPostComponent,
    PostEditDeleteComponent,
    CommentOnBlogPostComponent,
    HomePageComponent
  ]
})
export class UserDashboardModule { }
