import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BlogPostService } from '../../services/blog-post.service';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

import { BlogDetailsComponent } from './blog-details.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogDetailsComponent', () => {
  let component: BlogDetailsComponent;
  let fixture: ComponentFixture<BlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [
        BlogDetailsComponent,
        NavBarComponent
      ],
      providers: [
        BlogPostService,
        UserService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
