import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { NizInlineSvgModule } from '@notiz/ngx-design';

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [CommonModule, NizInlineSvgModule],
  exports: [ComingSoonComponent],
  providers: [],
})
export class ComingSoonModule {}
