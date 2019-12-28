import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Testimonials01Component } from './testimonials/testimonials-01.component';
import { Testimonials02Component } from './testimonials/testimonials-02.component';
import { Testimonials03Component } from './testimonials/testimonials-03.component';
import { Testimonials04Component } from './testimonials/testimonials-04.component';
import { Testimonials05Component } from './testimonials/testimonials-05.component';
import { Testimonials06Component } from './testimonials/testimonials-06.component';
import { Testimonials07Component } from './testimonials/testimonials-07.component';
import { Testimonials08Component } from './testimonials/testimonials-08.component';
import { Testimonials09Component } from './testimonials/testimonials-09.component';
import { Testimonials10Component } from './testimonials/testimonials-10.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Testimonials01Component,
    Testimonials02Component,
    Testimonials03Component,
    Testimonials04Component,
    Testimonials05Component,
    Testimonials06Component,
    Testimonials07Component,
    Testimonials08Component,
    Testimonials09Component,
    Testimonials10Component
  ],
  exports: [
    Testimonials01Component,
    Testimonials02Component,
    Testimonials03Component,
    Testimonials04Component,
    Testimonials05Component,
    Testimonials06Component,
    Testimonials07Component,
    Testimonials08Component,
    Testimonials09Component,
    Testimonials10Component
  ]
})
export class TestimonialsModule { }