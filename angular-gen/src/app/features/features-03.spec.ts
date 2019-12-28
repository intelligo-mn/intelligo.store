import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features03Component } from './features-03.component';

describe('Features03Component', () => {
  let component: Features03Component;
  let fixture: ComponentFixture<Features03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});