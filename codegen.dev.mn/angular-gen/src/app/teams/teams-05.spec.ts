import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Teams05Component } from './teams-05.component';

describe('Teams05Component', () => {
  let component: Teams05Component;
  let fixture: ComponentFixture<Teams05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teams05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teams05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});