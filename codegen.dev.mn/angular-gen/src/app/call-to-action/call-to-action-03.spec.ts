import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction03Component } from './call-to-action-03.component';

describe('CallToAction03Component', () => {
  let component: CallToAction03Component;
  let fixture: ComponentFixture<CallToAction03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});