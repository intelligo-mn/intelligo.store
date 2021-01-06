import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth.module';
import { ormconfig } from './orm.config';
import { config } from './config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CategoryModule } from './module/category.module';
import { UnitModule } from './module/unit.module';
import { ProductModule } from './module/product.module';
import { OrganizationModule } from './module/organization.module';
import { OrderModule } from './module/order.module';
import { OrderPackModule } from './module/order-pack.module';
import { OrderItemModule } from './module/order-item.module';
import { CustomerModule } from './module/customer.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ServeStaticModule.forRoot({
      rootPath: config.getClientPath()
    }),
    AuthModule,
    CategoryModule,
    UnitModule,
    ProductModule,
    OrganizationModule,
    OrderModule,
    OrderPackModule,
    OrderItemModule,
    CustomerModule
    // jhipster-needle-add-entity-module-to-main - JHipster will add entity modules here, do not remove
  ],
  controllers: [
    // jhipster-needle-add-controller-module-to-main - JHipster will add controller modules here, do not remove
  ],
  providers: [
    // jhipster-needle-add-service-module-to-main - JHipster will add service modules here, do not remove
  ]
})
export class AppModule {}
