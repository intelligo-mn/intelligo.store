import { OmitType } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends OmitType(Product, [
  'id',
  'slug',
  'created_at',
  'updated_at',
  'orders',
  'pivot',
  'shop',
  'categories',
  'tags',
  'type',
  'related_products',
  // 'variation_options',
]) {
  categories: number[];
  tags: number[];
}
