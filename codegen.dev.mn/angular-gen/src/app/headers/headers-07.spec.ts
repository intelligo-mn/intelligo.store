import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers07Component } from './headers-07.component';

describe('Headers07Component', () => {
  let component: Headers07Component;
  let fixture: ComponentFixture<Headers07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});