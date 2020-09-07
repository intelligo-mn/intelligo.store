import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NizInlineSvg } from './inline-svg.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NizInlineSvg],
  imports: [CommonModule, HttpClientModule],
  exports: [NizInlineSvg]
})
export class NizInlineSvgModule {}
