import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers14Component } from './headers-14.component';

describe('Headers14Component', () => {
  let component: Headers14Component;
  let fixture: ComponentFixture<Headers14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});