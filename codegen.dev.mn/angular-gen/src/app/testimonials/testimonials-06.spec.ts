import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { Testimonials06Component } from './testimonials-06.component';

describe('Testimonials06Component', () => {
  let component: Testimonials06Component;
  let fixture: ComponentFixture<Testimonials06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testimonials06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testimonials06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});