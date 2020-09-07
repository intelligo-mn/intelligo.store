import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Teams01Component } from './teams-01.component';

describe('Teams01Component', () => {
  let component: Teams01Component;
  let fixture: ComponentFixture<Teams01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teams01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teams01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});