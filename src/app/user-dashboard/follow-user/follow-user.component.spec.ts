import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUserComponent } from './follow-user.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostService } from '../../services/blog-post.service';
import { UserService } from '../../services/user.service';

describe('FollowUserComponent', () => {
  let component: FollowUserComponent;
  let fixture: ComponentFixture<FollowUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUserComponent ],
      imports: [
        FormsModule,
        HttpModule,
        HttpClientModule,
      ],
      providers: [
        BlogPostService,
        UserService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
