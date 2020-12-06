import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./module/auth.module";
import { ormconfig } from "./orm.config";
import { config } from "./config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { CategoryModule } from "./module/category.module";
import { UnitModule } from "./module/unit.module";
import { ProductModule } from "./module/product.module";
import { OrganizationModule } from "./module/organization.module";
import { OrderModule } from "./module/order.module";
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
