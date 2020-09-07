import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features26Component } from './features-26.component';

describe('Features26Component', () => {
  let component: Features26Component;
  let fixture: ComponentFixture<Features26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});