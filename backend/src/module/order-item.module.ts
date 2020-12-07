import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemController } from '../web/rest/order-item.controller';
import { OrderItemRepository } from '../repository/order-item.repository';
import { OrderItemService } from '../service/order-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItemRepository])],
  controllers: [OrderItemController],
  providers: [OrderItemService],
  exports: [OrderItemService]
})
export class OrderItemModule {}
