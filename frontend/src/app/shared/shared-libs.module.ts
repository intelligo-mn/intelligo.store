import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  exports: [FormsModule, CommonModule, NgbModule, NgbNavModule, InfiniteScrollModule, ReactiveFormsModule],
})
export class SharedLibsModule {}
