import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildfoodSharedModule } from 'src/app/shared/shared.module';
import { ProductDeleteDialogComponent } from './product-delete-dialog.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductUpdateComponent } from './product-update.component';
import { ProductComponent } from './product.component';
import { productRoute } from './product.route';

@NgModule({
  imports: [ChildfoodSharedModule, RouterModule.forChild(productRoute)],
  declarations: [ProductComponent, ProductDetailComponent, ProductUpdateComponent, ProductDeleteDialogComponent],
  entryComponents: [ProductDeleteDialogComponent],
})
export class ProductModule {}
