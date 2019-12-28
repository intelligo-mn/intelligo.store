import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Teams07Component } from './teams-07.component';

describe('Teams07Component', () => {
  let component: Teams07Component;
  let fixture: ComponentFixture<Teams07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teams07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teams07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});