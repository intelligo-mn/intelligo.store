import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms04Component } from './forms-04.component';

describe('Forms04Component', () => {
  let component: Forms04Component;
  let fixture: ComponentFixture<Forms04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});