import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings05Component } from './pricings-05.component';

describe('Pricings05Component', () => {
  let component: Pricings05Component;
  let fixture: ComponentFixture<Pricings05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});