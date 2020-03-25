import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
