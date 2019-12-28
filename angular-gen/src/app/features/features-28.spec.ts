import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features28Component } from './features-28.component';

describe('Features28Component', () => {
  let component: Features28Component;
  let fixture: ComponentFixture<Features28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});