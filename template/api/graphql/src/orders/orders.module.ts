import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderFileResolver, OrdersResolver } from './orders.resolver';

@Module({
  providers: [OrdersResolver, OrdersService, OrderFileResolver],
})
export class OrdersModule {}
