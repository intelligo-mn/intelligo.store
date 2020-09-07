import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings02Component } from './pricings-02.component';

describe('Pricings02Component', () => {
  let component: Pricings02Component;
  let fixture: ComponentFixture<Pricings02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});