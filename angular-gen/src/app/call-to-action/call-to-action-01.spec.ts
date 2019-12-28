import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction01Component } from './call-to-action-01.component';

describe('CallToAction01Component', () => {
  let component: CallToAction01Component;
  let fixture: ComponentFixture<CallToAction01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});