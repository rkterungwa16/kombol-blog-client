import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostService } from '../../services/blog-post.service';
import { UserService } from '../../services/user.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LikeBlogPostComponent } from '../like-blog-post/like-blog-post.component';
import { CommentOnBlogPostComponent } from '../comment-on-blog-post/comment-on-blog-post.component';
import { FollowUserComponent } from '../follow-user/follow-user.component';
import { FormsModule } from '@angular/forms';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        NavBarComponent,
        LikeBlogPostComponent,
        CommentOnBlogPostComponent,
        FollowUserComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        BlogPostService,
        UserService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
