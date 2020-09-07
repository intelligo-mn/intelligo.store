import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction20Component } from './call-to-action-20.component';

describe('CallToAction20Component', () => {
  let component: CallToAction20Component;
  let fixture: ComponentFixture<CallToAction20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});