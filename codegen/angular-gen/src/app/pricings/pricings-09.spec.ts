import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings09Component } from './pricings-09.component';

describe('Pricings09Component', () => {
  let component: Pricings09Component;
  let fixture: ComponentFixture<Pricings09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});