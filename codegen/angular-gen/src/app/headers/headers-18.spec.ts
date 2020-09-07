import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers18Component } from './headers-18.component';

describe('Headers18Component', () => {
  let component: Headers18Component;
  let fixture: ComponentFixture<Headers18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});