import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction09Component } from './call-to-action-09.component';

describe('CallToAction09Component', () => {
  let component: CallToAction09Component;
  let fixture: ComponentFixture<CallToAction09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});