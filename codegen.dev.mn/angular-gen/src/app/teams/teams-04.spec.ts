import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Teams04Component } from './teams-04.component';

describe('Teams04Component', () => {
  let component: Teams04Component;
  let fixture: ComponentFixture<Teams04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teams04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teams04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});