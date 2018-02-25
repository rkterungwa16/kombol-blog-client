import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditDeleteComponent } from './post-edit-delete.component';

describe('PostEditDeleteComponent', () => {
  let component: PostEditDeleteComponent;
  let fixture: ComponentFixture<PostEditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEditDeleteComponent ]
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
