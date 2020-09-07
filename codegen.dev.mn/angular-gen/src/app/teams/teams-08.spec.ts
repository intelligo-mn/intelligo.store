import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Teams08Component } from './teams-08.component';

describe('Teams08Component', () => {
  let component: Teams08Component;
  let fixture: ComponentFixture<Teams08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teams08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teams08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});