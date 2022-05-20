import { PickType } from '@nestjs/swagger';
import { Category } from '../entities/category.entity';

export class CreateCategoryDto extends PickType(Category, [
  'name',
  'type',
  'details',
  'parent',
  'icon',
  'image',
]) {}
