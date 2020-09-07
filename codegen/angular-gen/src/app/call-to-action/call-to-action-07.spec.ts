import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction07Component } from './call-to-action-07.component';

describe('CallToAction07Component', () => {
  let component: CallToAction07Component;
  let fixture: ComponentFixture<CallToAction07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});