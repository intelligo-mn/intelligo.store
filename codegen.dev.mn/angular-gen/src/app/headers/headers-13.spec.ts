import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers13Component } from './headers-13.component';

describe('Headers13Component', () => {
  let component: Headers13Component;
  let fixture: ComponentFixture<Headers13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});