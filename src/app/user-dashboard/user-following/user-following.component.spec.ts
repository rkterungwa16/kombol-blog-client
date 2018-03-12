import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowingComponent } from './user-following.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BlogPostService } from '../../services/blog-post.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserFollowingComponent', () => {
  let component: UserFollowingComponent;
  let fixture: ComponentFixture<UserFollowingComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserFollowingComponent,
        NavBarComponent
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
    fixture = TestBed.createComponent(UserFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
