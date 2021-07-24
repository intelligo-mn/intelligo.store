import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NizInlineSvgModule } from '../inline-svg/inline-svg.module';
import { NizToolbarModule } from '../toolbar/toolbar.module';



@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    NizInlineSvgModule,
    NizToolbarModule
  ]
})
export class NizNavbarModule { }
