import { InputType, PickType } from '@nestjs/graphql';
import { Shipping } from '../entities/shipping.entity';

@InputType()
export class CreateShippingInput extends PickType(Shipping, [
  'name',
  'amount',
  'is_global',
  'type',
]) {}
