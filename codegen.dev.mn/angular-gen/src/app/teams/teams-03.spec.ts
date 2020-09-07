import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Teams03Component } from './teams-03.component';

describe('Teams03Component', () => {
  let component: Teams03Component;
  let fixture: ComponentFixture<Teams03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teams03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teams03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});