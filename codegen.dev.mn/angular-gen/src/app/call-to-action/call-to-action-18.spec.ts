import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction18Component } from './call-to-action-18.component';

describe('CallToAction18Component', () => {
  let component: CallToAction18Component;
  let fixture: ComponentFixture<CallToAction18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});