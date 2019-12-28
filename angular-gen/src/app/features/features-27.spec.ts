import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features27Component } from './features-27.component';

describe('Features27Component', () => {
  let component: Features27Component;
  let fixture: ComponentFixture<Features27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});