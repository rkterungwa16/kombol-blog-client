import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutesModule } from './app-routes.module';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { AppComponent } from './app.component';

import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { PublishBlogPostModule } from './user-dashboard/publish-blog-post/publish-blog-post.module';

import { UserService } from './services/user.service';
import { BlogPostService } from './services/blog-post.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    UserDashboardModule,
    PublishBlogPostModule,
    LoginModule,
    HttpModule,
    FormsModule,
    RegisterModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    BlogPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
