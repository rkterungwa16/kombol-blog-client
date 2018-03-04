import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PostEditDeleteComponent } from './post-edit-delete.component';
import { BlogPostService } from '../../services/blog-post.service';
import { HttpClientModule } from '@angular/common/http';

describe('PostEditDeleteComponent', () => {
  let component: PostEditDeleteComponent;
  let fixture: ComponentFixture<PostEditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        HttpClientModule
      ],
      declarations: [
        PostEditDeleteComponent
      ],
      providers: [
        BlogPostService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
