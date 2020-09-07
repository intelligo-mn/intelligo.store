import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers03Component } from './headers-03.component';

describe('Headers03Component', () => {
  let component: Headers03Component;
  let fixture: ComponentFixture<Headers03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});