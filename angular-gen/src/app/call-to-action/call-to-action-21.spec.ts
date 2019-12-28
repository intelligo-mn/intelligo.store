import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction21Component } from './call-to-action-21.component';

describe('CallToAction21Component', () => {
  let component: CallToAction21Component;
  let fixture: ComponentFixture<CallToAction21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});