import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features13Component } from './features-13.component';

describe('Features13Component', () => {
  let component: Features13Component;
  let fixture: ComponentFixture<Features13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});