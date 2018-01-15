import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeBlogPostComponent } from './like-blog-post.component';

describe('LikeBlogPostComponent', () => {
  let component: LikeBlogPostComponent;
  let fixture: ComponentFixture<LikeBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeBlogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
