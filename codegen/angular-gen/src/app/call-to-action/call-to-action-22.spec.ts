import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CallToAction22Component } from './call-to-action-22.component';

describe('CallToAction22Component', () => {
  let component: CallToAction22Component;
  let fixture: ComponentFixture<CallToAction22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToAction22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToAction22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});