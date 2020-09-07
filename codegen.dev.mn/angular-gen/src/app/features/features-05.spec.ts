import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features05Component } from './features-05.component';

describe('Features05Component', () => {
  let component: Features05Component;
  let fixture: ComponentFixture<Features05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});