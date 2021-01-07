import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDeleteDialogComponent } from './product-delete-dialog.component';
import { ProductUpdateComponent } from './product-update.component';
import { ProductComponent } from './product.component';
import { productRoute } from './product.route';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(productRoute)],
  declarations: [ProductComponent, ProductUpdateComponent, ProductDeleteDialogComponent],
  entryComponents: [ProductDeleteDialogComponent],
})
export class ProductModule {}
