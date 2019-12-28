import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Footers04Component } from './footers-04.component';

describe('Footers04Component', () => {
  let component: Footers04Component;
  let fixture: ComponentFixture<Footers04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footers04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footers04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});