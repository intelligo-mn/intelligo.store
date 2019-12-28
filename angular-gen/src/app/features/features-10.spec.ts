import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Features10Component } from './features-10.component';

describe('Features10Component', () => {
  let component: Features10Component;
  let fixture: ComponentFixture<Features10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Features10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Features10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});