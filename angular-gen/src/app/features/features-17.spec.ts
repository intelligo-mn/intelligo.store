import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features17Component } from './features-17.component';

describe('Features17Component', () => {
  let component: Features17Component;
  let fixture: ComponentFixture<Features17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});