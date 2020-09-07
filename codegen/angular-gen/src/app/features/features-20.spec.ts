import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features20Component } from './features-20.component';

describe('Features20Component', () => {
  let component: Features20Component;
  let fixture: ComponentFixture<Features20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});