import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTypeController } from '../../web/rest/product-type.controller';
import { ProductTypeRepository } from '../../repository/product-type.repository';
import { ProductTypeService } from '../../service/product-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTypeRepository])],
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
  exports: [ProductTypeService],
})
export class ProductTypeModule {}
