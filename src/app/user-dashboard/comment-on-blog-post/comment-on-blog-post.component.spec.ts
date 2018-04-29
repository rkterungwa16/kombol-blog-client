import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BlogPostService } from '../../services/blog-post.service';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

import { CommentOnBlogPostComponent } from './comment-on-blog-post.component';

describe('CommentOnBlogPostComponent', () => {
  let component: CommentOnBlogPostComponent;
  let fixture: ComponentFixture<CommentOnBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        HttpClientModule
      ],
      declarations: [ CommentOnBlogPostComponent ],
      providers: [
        BlogPostService,
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentOnBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
