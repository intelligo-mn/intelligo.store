import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials09Component } from './testimonials-09.component';

describe('Testimonials09Component', () => {
  let component: Testimonials09Component;
  let fixture: ComponentFixture<Testimonials09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});