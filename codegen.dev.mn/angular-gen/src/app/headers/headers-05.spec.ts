import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers05Component } from './headers-05.component';

describe('Headers05Component', () => {
  let component: Headers05Component;
  let fixture: ComponentFixture<Headers05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});