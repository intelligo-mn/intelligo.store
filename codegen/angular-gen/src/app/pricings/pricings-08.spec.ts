import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings08Component } from './pricings-08.component';

describe('Pricings08Component', () => {
  let component: Pricings08Component;
  let fixture: ComponentFixture<Pricings08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});