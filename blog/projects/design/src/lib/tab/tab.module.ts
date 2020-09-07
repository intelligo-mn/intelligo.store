import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NizTab } from './tab.component';
import { NizInlineSvgModule } from '../inline-svg/inline-svg.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NizTab],
  imports: [CommonModule, RouterModule, NizInlineSvgModule],
  exports: [NizTab],
})
export class NizTabModule {}
