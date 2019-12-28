import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms03Component } from './forms-03.component';

describe('Forms03Component', () => {
  let component: Forms03Component;
  let fixture: ComponentFixture<Forms03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});