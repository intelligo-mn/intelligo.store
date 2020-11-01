import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth.module';
import { ormconfig } from './orm.config';
import { ProductTypeModule } from './module/product-type.module';
import { UnitModule } from './module/unit.module';
import { ProductModule } from './module/product.module';
import { KinderGardenModule } from './module/kinder-garden.module';
import { OrderModule } from './module/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    ProductTypeModule,
    UnitModule,
    ProductModule,
    KinderGardenModule,
    OrderModule,
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
