import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NizToolbar } from './toolbar.component';

@NgModule({
  declarations: [NizToolbar],
  imports: [CommonModule],
  exports: [NizToolbar],
})
export class NizToolbarModule {}
