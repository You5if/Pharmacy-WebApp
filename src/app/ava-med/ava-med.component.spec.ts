import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaMedComponent } from './ava-med.component';

describe('AvaMedComponent', () => {
  let component: AvaMedComponent;
  let fixture: ComponentFixture<AvaMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
