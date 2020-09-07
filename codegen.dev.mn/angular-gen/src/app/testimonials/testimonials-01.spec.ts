import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials01Component } from './testimonials-01.component';

describe('Testimonials01Component', () => {
  let component: Testimonials01Component;
  let fixture: ComponentFixture<Testimonials01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});