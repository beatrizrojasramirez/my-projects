import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectListComponentComponent } from './object-list-component.component';

describe('ObjectListComponentComponent', () => {
  let component: ObjectListComponentComponent;
  let fixture: ComponentFixture<ObjectListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
