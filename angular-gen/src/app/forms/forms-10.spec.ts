import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms10Component } from './forms-10.component';

describe('Forms10Component', () => {
  let component: Forms10Component;
  let fixture: ComponentFixture<Forms10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});