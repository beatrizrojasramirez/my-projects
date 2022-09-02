import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveDetailComponent } from './blog-archive-detail.component';

describe('BlogArchiveDetailComponent', () => {
  let component: BlogArchiveDetailComponent;
  let fixture: ComponentFixture<BlogArchiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogArchiveDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArchiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
