import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaLocComponent } from './ava-loc.component';

describe('AvaLocComponent', () => {
  let component: AvaLocComponent;
  let fixture: ComponentFixture<AvaLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
