import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BlogPostService } from '../../services/blog-post.service';
import { HttpClientModule } from '@angular/common/http';

import { LikeBlogPostComponent } from './like-blog-post.component';

describe('LikeBlogPostComponent', () => {
  let component: LikeBlogPostComponent;
  let fixture: ComponentFixture<LikeBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        HttpClientModule
      ],
      declarations: [ LikeBlogPostComponent ],
      providers: [
        BlogPostService
      ]
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
