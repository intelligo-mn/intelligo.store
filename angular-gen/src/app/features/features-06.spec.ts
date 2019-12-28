import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features06Component } from './features-06.component';

describe('Features06Component', () => {
  let component: Features06Component;
  let fixture: ComponentFixture<Features06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});