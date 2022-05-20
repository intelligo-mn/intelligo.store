import { PartialType, PickType } from '@nestjs/swagger';
import { OrderStatus } from '../entities/order-status.entity';

export class CreateOrderStatusDto extends PickType(OrderStatus, [
  'name',
  'color',
  'serial',
]) {}

export class UpdateOrderStatusDto extends PartialType(CreateOrderStatusDto) {}
