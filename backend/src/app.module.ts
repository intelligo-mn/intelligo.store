import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ormconfig } from './orm.config';
import { CategoryModule } from './modules/category/category.module';
import { UnitModule } from './modules/unit/unit.module';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';
import { OrganizationModule } from './modules/organization/organization.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    CategoryModule,
    UnitModule,
    ProductModule,
    OrganizationModule,
    OrderModule,
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
