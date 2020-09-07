import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features15Component } from './features-15.component';

describe('Features15Component', () => {
  let component: Features15Component;
  let fixture: ComponentFixture<Features15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});