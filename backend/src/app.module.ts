import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ormconfig } from './orm.config';
import { ProductTypeModule } from './modules/product-type/product-type.module';
import { UnitModule } from './modules/unit/unit.module';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    ProductTypeModule,
    UnitModule,
    ProductModule,
    OrderModule,
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
