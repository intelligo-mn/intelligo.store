import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Headers12Component } from './headers-12.component';

describe('Headers12Component', () => {
  let component: Headers12Component;
  let fixture: ComponentFixture<Headers12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headers12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});