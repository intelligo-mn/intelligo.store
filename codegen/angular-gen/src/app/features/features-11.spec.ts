import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features11Component } from './features-11.component';

describe('Features11Component', () => {
  let component: Features11Component;
  let fixture: ComponentFixture<Features11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});