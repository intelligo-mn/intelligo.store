import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction15Component } from './call-to-action-15.component';

describe('CallToAction15Component', () => {
  let component: CallToAction15Component;
  let fixture: ComponentFixture<CallToAction15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});