import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOnBlogPostComponent } from './comment-on-blog-post.component';

describe('CommentOnBlogPostComponent', () => {
  let component: CommentOnBlogPostComponent;
  let fixture: ComponentFixture<CommentOnBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentOnBlogPostComponent ]
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
