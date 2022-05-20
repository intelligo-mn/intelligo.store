import { Field, ID, InputType, PartialType, PickType } from '@nestjs/graphql';
import { OrderStatus } from '../entities/order-status.entity';

@InputType()
export class CreateOrderStatusInput extends PickType(OrderStatus, [
  'name',
  'color',
  'serial',
]) {}
@InputType()
export class UpdateOrderStatusInput extends PartialType(
  CreateOrderStatusInput,
) {
  @Field(() => ID)
  id: number;
}
