import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features33Component } from './features-33.component';

describe('Features33Component', () => {
  let component: Features33Component;
  let fixture: ComponentFixture<Features33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});