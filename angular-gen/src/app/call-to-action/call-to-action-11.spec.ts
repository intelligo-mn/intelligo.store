import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction11Component } from './call-to-action-11.component';

describe('CallToAction11Component', () => {
  let component: CallToAction11Component;
  let fixture: ComponentFixture<CallToAction11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});