import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials03Component } from './testimonials-03.component';

describe('Testimonials03Component', () => {
  let component: Testimonials03Component;
  let fixture: ComponentFixture<Testimonials03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});