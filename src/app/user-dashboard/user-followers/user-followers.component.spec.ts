import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowersComponent } from './user-followers.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogPostService } from '../../services/blog-post.service';
import { UserService } from '../../services/user.service';

describe('UserFollowersComponent', () => {
  let component: UserFollowersComponent;
  let fixture: ComponentFixture<UserFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserFollowersComponent,
        NavBarComponent
      ],
      imports: [
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
    fixture = TestBed.createComponent(UserFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
