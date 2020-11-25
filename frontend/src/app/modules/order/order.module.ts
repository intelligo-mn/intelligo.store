import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderFormComponent } from './order-form/order-form.component';



@NgModule({
  declarations: [OrderComponent, OrderFormComponent],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
