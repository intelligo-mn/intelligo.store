import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features14Component } from './features-14.component';

describe('Features14Component', () => {
  let component: Features14Component;
  let fixture: ComponentFixture<Features14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});