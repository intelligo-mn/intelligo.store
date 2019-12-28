import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction12Component } from './call-to-action-12.component';

describe('CallToAction12Component', () => {
  let component: CallToAction12Component;
  let fixture: ComponentFixture<CallToAction12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});