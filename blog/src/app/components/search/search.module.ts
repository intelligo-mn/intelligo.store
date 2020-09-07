import { NizInlineSvgModule } from '@notiz/ngx-design';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NizSearch } from './search.component';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NizInlineSvgModule,
    PipesModule,
  ],
  declarations: [NizSearch],
  exports: [NizSearch],
})
export class NizSearchComponentModule {}
