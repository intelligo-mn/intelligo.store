import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings03Component } from './pricings-03.component';

describe('Pricings03Component', () => {
  let component: Pricings03Component;
  let fixture: ComponentFixture<Pricings03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});