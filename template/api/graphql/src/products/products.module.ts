import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver, VariationResolver } from './products.resolver';

@Module({
  providers: [ProductsResolver, ProductsService, VariationResolver],
})
export class ProductsModule {}
