import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NizInlineSvgModule } from '../inline-svg/inline-svg.module';



@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    NizInlineSvgModule
  ]
})
export class NizMenuModule { }
