import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction16Component } from './call-to-action-16.component';

describe('CallToAction16Component', () => {
  let component: CallToAction16Component;
  let fixture: ComponentFixture<CallToAction16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});