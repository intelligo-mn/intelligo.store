import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Pricings06Component } from './pricings-06.component';

describe('Pricings06Component', () => {
  let component: Pricings06Component;
  let fixture: ComponentFixture<Pricings06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricings06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricings06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});