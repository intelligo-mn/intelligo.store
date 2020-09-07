import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features19Component } from './features-19.component';

describe('Features19Component', () => {
  let component: Features19Component;
  let fixture: ComponentFixture<Features19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});