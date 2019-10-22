import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CardModule } from './card/card.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ ProductModule, CategoryModule, OrderModule, AuthModule, CoreModule, CardModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
