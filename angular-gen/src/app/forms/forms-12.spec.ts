import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Forms12Component } from './forms-12.component';

describe('Forms12Component', () => {
  let component: Forms12Component;
  let fixture: ComponentFixture<Forms12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});