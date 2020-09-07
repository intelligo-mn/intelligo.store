import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms06Component } from './forms-06.component';

describe('Forms06Component', () => {
  let component: Forms06Component;
  let fixture: ComponentFixture<Forms06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});