import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials05Component } from './testimonials-05.component';

describe('Testimonials05Component', () => {
  let component: Testimonials05Component;
  let fixture: ComponentFixture<Testimonials05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});