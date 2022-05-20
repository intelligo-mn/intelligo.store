import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ProductsController,
  PopularProductsController,
} from './products.controller';

@Module({
  controllers: [ProductsController, PopularProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
