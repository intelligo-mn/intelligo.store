import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction13Component } from './call-to-action-13.component';

describe('CallToAction13Component', () => {
  let component: CallToAction13Component;
  let fixture: ComponentFixture<CallToAction13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});