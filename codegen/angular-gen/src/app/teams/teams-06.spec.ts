import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Teams06Component } from './teams-06.component';

describe('Teams06Component', () => {
  let component: Teams06Component;
  let fixture: ComponentFixture<Teams06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teams06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teams06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});