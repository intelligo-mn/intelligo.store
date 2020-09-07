import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials10Component } from './testimonials-10.component';

describe('Testimonials10Component', () => {
  let component: Testimonials10Component;
  let fixture: ComponentFixture<Testimonials10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});