import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./modules/auth/auth.module";
import { KinderGardenModule } from "./modules/kinder-garden/kinder-garden.module";
import { OrderModule } from "./modules/order/order.module";
import { ProductTypeModule } from "./modules/product/product-type.module";
import { ProductModule } from "./modules/product/product.module";
import { UnitModule } from "./modules/unit/unit.module";
import { ormconfig } from "./orm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    KinderGardenModule,
    OrderModule,
    ProductModule,
    ProductTypeModule,
    UnitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
