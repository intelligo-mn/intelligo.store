import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction08Component } from './call-to-action-08.component';

describe('CallToAction08Component', () => {
  let component: CallToAction08Component;
  let fixture: ComponentFixture<CallToAction08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});