import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "./config";
import { CategoryModule } from "./modules/category/category.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { AuthModule } from "./modules/identity/auth.module";
import { OrderPackModule } from "./modules/order-pack/order-pack.module";
import { OrderModule } from "./modules/order/order.module";
import { OrganizationModule } from "./modules/organization/organization.module";
import { ProductModule } from "./modules/product/product.module";
import { UnitModule } from "./modules/unit/unit.module";
import { ormconfig } from "./orm.config";
@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ServeStaticModule.forRoot({
      rootPath: config.getClientPath(),
    }),
    AuthModule,
    DashboardModule,
    ProductModule,
    OrganizationModule,
    OrderModule,
    OrderPackModule,
    CategoryModule,
    UnitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
