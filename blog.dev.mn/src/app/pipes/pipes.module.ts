import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPipe } from './dash.pipe';
import { SearchPipe } from './search.pipe';
import { StartsWithPipe } from './startswith.pipe';

@NgModule({
  declarations: [DashPipe, SearchPipe, StartsWithPipe],
  imports: [CommonModule],
  exports: [DashPipe, SearchPipe, StartsWithPipe],
  providers: [SearchPipe],
})
export class PipesModule {}
