import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction10Component } from './call-to-action-10.component';

describe('CallToAction10Component', () => {
  let component: CallToAction10Component;
  let fixture: ComponentFixture<CallToAction10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});