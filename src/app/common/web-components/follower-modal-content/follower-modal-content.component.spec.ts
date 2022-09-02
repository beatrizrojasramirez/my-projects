import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerModalContentComponent } from './follower-modal-content.component';

describe('FollowerModalContentComponent', () => {
  let component: FollowerModalContentComponent;
  let fixture: ComponentFixture<FollowerModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
