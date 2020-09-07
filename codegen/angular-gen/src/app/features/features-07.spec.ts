import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features07Component } from './features-07.component';

describe('Features07Component', () => {
  let component: Features07Component;
  let fixture: ComponentFixture<Features07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});