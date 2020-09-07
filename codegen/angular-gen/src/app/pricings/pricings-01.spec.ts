import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings01Component } from './pricings-01.component';

describe('Pricings01Component', () => {
  let component: Pricings01Component;
  let fixture: ComponentFixture<Pricings01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});