import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials07Component } from './testimonials-07.component';

describe('Testimonials07Component', () => {
  let component: Testimonials07Component;
  let fixture: ComponentFixture<Testimonials07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});