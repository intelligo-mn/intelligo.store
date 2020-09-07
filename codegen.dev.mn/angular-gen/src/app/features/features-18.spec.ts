import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features18Component } from './features-18.component';

describe('Features18Component', () => {
  let component: Features18Component;
  let fixture: ComponentFixture<Features18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});