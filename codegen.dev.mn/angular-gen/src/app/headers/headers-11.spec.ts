import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers11Component } from './headers-11.component';

describe('Headers11Component', () => {
  let component: Headers11Component;
  let fixture: ComponentFixture<Headers11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});