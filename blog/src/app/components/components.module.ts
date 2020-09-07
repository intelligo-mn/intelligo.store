import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStackComponent } from './card-stack/card-stack.component';
import { MarkdownModule } from 'ngx-markdown';
import { PipesModule } from '@pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardStackComponent],
  imports: [CommonModule, PipesModule, MarkdownModule.forChild(), RouterModule],
  exports: [CardStackComponent],
  providers: [],
})
export class ComponentsModule {}
