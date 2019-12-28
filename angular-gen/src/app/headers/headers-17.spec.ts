import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers17Component } from './headers-17.component';

describe('Headers17Component', () => {
  let component: Headers17Component;
  let fixture: ComponentFixture<Headers17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});