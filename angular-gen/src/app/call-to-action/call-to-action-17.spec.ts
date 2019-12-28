import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction17Component } from './call-to-action-17.component';

describe('CallToAction17Component', () => {
  let component: CallToAction17Component;
  let fixture: ComponentFixture<CallToAction17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});