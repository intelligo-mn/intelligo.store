import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials08Component } from './testimonials-08.component';

describe('Testimonials08Component', () => {
  let component: Testimonials08Component;
  let fixture: ComponentFixture<Testimonials08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});