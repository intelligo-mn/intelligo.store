import { PickType } from '@nestjs/swagger';
import { Shipping } from '../entities/shipping.entity';

export class CreateShippingDto extends PickType(Shipping, [
  'name',
  'amount',
  'is_global',
  'type',
]) {}
