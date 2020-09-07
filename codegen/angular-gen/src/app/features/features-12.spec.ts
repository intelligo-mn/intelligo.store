import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features12Component } from './features-12.component';

describe('Features12Component', () => {
  let component: Features12Component;
  let fixture: ComponentFixture<Features12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});