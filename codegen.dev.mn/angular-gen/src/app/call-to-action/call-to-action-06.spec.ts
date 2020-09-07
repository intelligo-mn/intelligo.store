import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction06Component } from './call-to-action-06.component';

describe('CallToAction06Component', () => {
  let component: CallToAction06Component;
  let fixture: ComponentFixture<CallToAction06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});