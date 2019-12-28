import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Pricings01Component } from './pricings/pricings-01.component';
import { Pricings02Component } from './pricings/pricings-02.component';
import { Pricings03Component } from './pricings/pricings-03.component';
import { Pricings04Component } from './pricings/pricings-04.component';
import { Pricings05Component } from './pricings/pricings-05.component';
import { Pricings06Component } from './pricings/pricings-06.component';
import { Pricings07Component } from './pricings/pricings-07.component';
import { Pricings08Component } from './pricings/pricings-08.component';
import { Pricings09Component } from './pricings/pricings-09.component';
import { Pricings10Component } from './pricings/pricings-10.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Pricings01Component,
    Pricings02Component,
    Pricings03Component,
    Pricings04Component,
    Pricings05Component,
    Pricings06Component,
    Pricings07Component,
    Pricings08Component,
    Pricings09Component,
    Pricings10Component
  ],
  exports: [
    Pricings01Component,
    Pricings02Component,
    Pricings03Component,
    Pricings04Component,
    Pricings05Component,
    Pricings06Component,
    Pricings07Component,
    Pricings08Component,
    Pricings09Component,
    Pricings10Component
  ]
})
export class PricingsModule { }