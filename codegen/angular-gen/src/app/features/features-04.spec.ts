import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features04Component } from './features-04.component';

describe('Features04Component', () => {
  let component: Features04Component;
  let fixture: ComponentFixture<Features04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});