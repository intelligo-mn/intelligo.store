import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction02Component } from './call-to-action-02.component';

describe('CallToAction02Component', () => {
  let component: CallToAction02Component;
  let fixture: ComponentFixture<CallToAction02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});