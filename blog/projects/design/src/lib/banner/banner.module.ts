import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NizBanner } from './banner.component';



@NgModule({
  declarations: [NizBanner],
  exports: [NizBanner],
  imports: [
    CommonModule
  ]
})
export class NizBannerModule { }
