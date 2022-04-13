import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaCheckerComponent } from './ava-checker.component';

describe('AvaCheckerComponent', () => {
  let component: AvaCheckerComponent;
  let fixture: ComponentFixture<AvaCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
