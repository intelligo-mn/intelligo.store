import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button.component';

@NgModule({
  declarations: [PrimaryButtonComponent],
  exports: [PrimaryButtonComponent],
  imports: [CommonModule],
})
export class NizPrimaryButtonModule {}
