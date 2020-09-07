import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers09Component } from './headers-09.component';

describe('Headers09Component', () => {
  let component: Headers09Component;
  let fixture: ComponentFixture<Headers09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});