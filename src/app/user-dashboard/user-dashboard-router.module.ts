import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { PublishBlogPostComponent } from './publish-blog-post/publish-blog-post.component';
import { UserFollowingComponent } from './user-following/user-following.component';

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'post/:id', component: BlogDetailsComponent },
  { path: 'user/followers', component: UserFollowersComponent},
  { path: 'publish', component: PublishBlogPostComponent },
  { path: 'user/following', component: UserFollowingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UserDashboardRouterModule { }
