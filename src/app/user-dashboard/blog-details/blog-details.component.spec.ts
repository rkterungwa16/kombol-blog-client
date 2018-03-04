import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BlogPostService } from '../../services/blog-post.service';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

import { BlogDetailsComponent } from './blog-details.component';

describe('BlogDetailsComponent', () => {
  let component: BlogDetailsComponent;
  let fixture: ComponentFixture<BlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule
      ],
      declarations: [ BlogDetailsComponent ],
      providers: [
        BlogPostService,
        UserService
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
