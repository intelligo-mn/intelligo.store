import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers10Component } from './headers-10.component';

describe('Headers10Component', () => {
  let component: Headers10Component;
  let fixture: ComponentFixture<Headers10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});