import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms09Component } from './forms-09.component';

describe('Forms09Component', () => {
  let component: Forms09Component;
  let fixture: ComponentFixture<Forms09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});