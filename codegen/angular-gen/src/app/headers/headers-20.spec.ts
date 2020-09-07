import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers20Component } from './headers-20.component';

describe('Headers20Component', () => {
  let component: Headers20Component;
  let fixture: ComponentFixture<Headers20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});