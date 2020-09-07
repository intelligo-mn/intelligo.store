import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers15Component } from './headers-15.component';

describe('Headers15Component', () => {
  let component: Headers15Component;
  let fixture: ComponentFixture<Headers15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});