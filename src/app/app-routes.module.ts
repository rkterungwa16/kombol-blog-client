import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PublishBlogPostComponent } from './user-dashboard/publish-blog-post/publish-blog-post.component';
import { HomePageComponent } from './user-dashboard/home-page/home-page.component';
import { BlogDetailsComponent } from './user-dashboard/blog-details/blog-details.component';
import { UserFollowersComponent } from './user-dashboard/user-followers/user-followers.component';
import { UserFollowingComponent } from './user-dashboard/user-following/user-following.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'publish', component: PublishBlogPostComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'post/:id', component: BlogDetailsComponent },
  { path: 'user/followers', component: UserFollowersComponent },
  { path: 'user/following', component: UserFollowingComponent },
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutesModule {}
