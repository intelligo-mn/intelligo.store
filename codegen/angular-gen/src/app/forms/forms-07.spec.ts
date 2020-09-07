import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms07Component } from './forms-07.component';

describe('Forms07Component', () => {
  let component: Forms07Component;
  let fixture: ComponentFixture<Forms07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});