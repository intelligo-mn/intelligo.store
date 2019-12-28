import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers04Component } from './headers-04.component';

describe('Headers04Component', () => {
  let component: Headers04Component;
  let fixture: ComponentFixture<Headers04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});