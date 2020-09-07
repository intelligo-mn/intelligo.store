import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials02Component } from './testimonials-02.component';

describe('Testimonials02Component', () => {
  let component: Testimonials02Component;
  let fixture: ComponentFixture<Testimonials02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});