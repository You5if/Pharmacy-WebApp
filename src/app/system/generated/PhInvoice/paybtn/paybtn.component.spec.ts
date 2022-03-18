import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybtnComponent } from './paybtn.component';

describe('PaybtnComponent', () => {
  let component: PaybtnComponent;
  let fixture: ComponentFixture<PaybtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaybtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
