import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction14Component } from './call-to-action-14.component';

describe('CallToAction14Component', () => {
  let component: CallToAction14Component;
  let fixture: ComponentFixture<CallToAction14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});