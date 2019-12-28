import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms05Component } from './forms-05.component';

describe('Forms05Component', () => {
  let component: Forms05Component;
  let fixture: ComponentFixture<Forms05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});