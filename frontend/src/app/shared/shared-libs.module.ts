import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    NgxDatatableModule.forRoot({
      messages: {
        selectedMessage: 'Сонгосон өгөгдөл',
        emptyMessage: 'Хоосон байна',
        totalMessage: 'Нийт',
      },
    }),
  ],
  exports: [FormsModule, CommonModule, NgbModule, InfiniteScrollModule, ReactiveFormsModule, NgxDatatableModule],
})
export class SharedLibsModule {}
