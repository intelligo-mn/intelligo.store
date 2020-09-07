import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers08Component } from './headers-08.component';

describe('Headers08Component', () => {
  let component: Headers08Component;
  let fixture: ComponentFixture<Headers08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});