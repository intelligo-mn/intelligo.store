import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers19Component } from './headers-19.component';

describe('Headers19Component', () => {
  let component: Headers19Component;
  let fixture: ComponentFixture<Headers19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});