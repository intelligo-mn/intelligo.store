import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings07Component } from './pricings-07.component';

describe('Pricings07Component', () => {
  let component: Pricings07Component;
  let fixture: ComponentFixture<Pricings07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});