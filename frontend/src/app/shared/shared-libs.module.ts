import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [FormsModule, CommonModule, NgbModule, NgJhipsterModule, InfiniteScrollModule, ReactiveFormsModule, TranslateModule],
})
export class SharedLibsModule {}
