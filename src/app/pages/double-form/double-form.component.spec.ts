import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleFormComponent } from './double-form.component';

describe('DoubleFormComponent', () => {
  let component: DoubleFormComponent;
  let fixture: ComponentFixture<DoubleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
