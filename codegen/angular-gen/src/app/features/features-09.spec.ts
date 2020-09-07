import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features09Component } from './features-09.component';

describe('Features09Component', () => {
  let component: Features09Component;
  let fixture: ComponentFixture<Features09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});