import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Teams02Component } from './teams-02.component';

describe('Teams02Component', () => {
  let component: Teams02Component;
  let fixture: ComponentFixture<Teams02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teams02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teams02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});