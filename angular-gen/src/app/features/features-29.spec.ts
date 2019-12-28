import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features29Component } from './features-29.component';

describe('Features29Component', () => {
  let component: Features29Component;
  let fixture: ComponentFixture<Features29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});