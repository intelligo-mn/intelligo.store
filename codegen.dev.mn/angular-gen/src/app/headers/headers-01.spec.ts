import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers01Component } from './headers-01.component';

describe('Headers01Component', () => {
  let component: Headers01Component;
  let fixture: ComponentFixture<Headers01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});