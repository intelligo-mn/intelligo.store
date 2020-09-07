import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features23Component } from './features-23.component';

describe('Features23Component', () => {
  let component: Features23Component;
  let fixture: ComponentFixture<Features23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});