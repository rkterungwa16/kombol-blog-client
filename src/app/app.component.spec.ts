import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutesModule } from './app-routes.module';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

import { UserService } from './services/user.service';
import { BlogPostService } from './services/blog-post.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutesModule,
        BrowserModule,
        UserDashboardModule,
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
        BlogPostService,
        {provide: APP_BASE_HREF, useValue: '/' }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
