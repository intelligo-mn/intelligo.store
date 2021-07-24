import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NizInput } from './input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NizInput],
  exports: [NizInput],
})
export class NizInputModule {}
