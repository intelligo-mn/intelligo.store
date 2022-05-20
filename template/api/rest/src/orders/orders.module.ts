import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import {
  OrderFilesController,
  OrdersController,
  OrderStatusController,
} from './orders.controller';

@Module({
  controllers: [OrdersController, OrderStatusController, OrderFilesController],
  providers: [OrdersService],
})
export class OrdersModule {}
