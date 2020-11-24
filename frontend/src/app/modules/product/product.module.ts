import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [ProductComponent, ProductFormComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
