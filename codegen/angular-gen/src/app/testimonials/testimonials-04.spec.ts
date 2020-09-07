import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials04Component } from './testimonials-04.component';

describe('Testimonials04Component', () => {
  let component: Testimonials04Component;
  let fixture: ComponentFixture<Testimonials04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});