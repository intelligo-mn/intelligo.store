import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings10Component } from './pricings-10.component';

describe('Pricings10Component', () => {
  let component: Pricings10Component;
  let fixture: ComponentFixture<Pricings10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});