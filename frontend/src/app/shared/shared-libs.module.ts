import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [NgSelectModule, NgOptionHighlightModule],
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
  ],
})
export class SharedLibsModule {}
