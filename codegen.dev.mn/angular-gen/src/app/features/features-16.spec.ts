import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features16Component } from './features-16.component';

describe('Features16Component', () => {
  let component: Features16Component;
  let fixture: ComponentFixture<Features16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});