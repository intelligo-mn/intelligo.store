import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction19Component } from './call-to-action-19.component';

describe('CallToAction19Component', () => {
  let component: CallToAction19Component;
  let fixture: ComponentFixture<CallToAction19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});