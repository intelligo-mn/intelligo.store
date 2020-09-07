import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features08Component } from './features-08.component';

describe('Features08Component', () => {
  let component: Features08Component;
  let fixture: ComponentFixture<Features08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});