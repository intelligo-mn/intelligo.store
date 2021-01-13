import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./modules/identity/auth.module";
import { ormconfig } from "./orm.config";
import { config } from "./config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { CategoryModule } from "./modules/category/category.module";
import { UnitModule } from "./modules/unit/unit.module";
import { ProductModule } from "./modules/product/product.module";
import { OrganizationModule } from "./modules/organization/organization.module";
import { OrderModule } from "./modules/order/order.module";
import { OrderPackModule } from "./modules/order-pack/order-pack.module";
@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ServeStaticModule.forRoot({
      rootPath: config.getClientPath(),
    }),
    AuthModule,
    CategoryModule,
    UnitModule,
    ProductModule,
    OrganizationModule,
    OrderModule,
    OrderPackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
