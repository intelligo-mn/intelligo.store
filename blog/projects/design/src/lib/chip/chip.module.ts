import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NizChip } from './chip.component';

@NgModule({
  declarations: [NizChip],
  imports: [CommonModule, RouterModule],
  exports: [NizChip],
})
export class NizChipModule {}
