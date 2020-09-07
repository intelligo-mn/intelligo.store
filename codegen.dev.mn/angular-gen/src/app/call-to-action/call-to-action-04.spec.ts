import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction04Component } from './call-to-action-04.component';

describe('CallToAction04Component', () => {
  let component: CallToAction04Component;
  let fixture: ComponentFixture<CallToAction04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});