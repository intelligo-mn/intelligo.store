import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms11Component } from './forms-11.component';

describe('Forms11Component', () => {
  let component: Forms11Component;
  let fixture: ComponentFixture<Forms11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});