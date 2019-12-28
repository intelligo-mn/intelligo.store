import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings04Component } from './pricings-04.component';

describe('Pricings04Component', () => {
  let component: Pricings04Component;
  let fixture: ComponentFixture<Pricings04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});