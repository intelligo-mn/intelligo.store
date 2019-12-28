import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction05Component } from './call-to-action-05.component';

describe('CallToAction05Component', () => {
  let component: CallToAction05Component;
  let fixture: ComponentFixture<CallToAction05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});