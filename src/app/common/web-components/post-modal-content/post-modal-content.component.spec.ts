import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostModalContentComponent } from './post-modal-content.component';

describe('PostModalContentComponent', () => {
  let component: PostModalContentComponent;
  let fixture: ComponentFixture<PostModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
