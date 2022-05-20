import { InputType, PickType } from '@nestjs/graphql';
import { Coupon } from '../entities/coupon.entity';

@InputType()
export class CreateCouponInput extends PickType(Coupon, [
  'code',
  'type',
  'amount',
  'description',
  'image',
  'expire_at',
  'active_from',
]) {}
