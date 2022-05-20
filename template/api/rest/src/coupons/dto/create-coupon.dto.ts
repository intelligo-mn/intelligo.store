import { PickType } from '@nestjs/swagger';
import { Coupon } from '../entities/coupon.entity';

export class CreateCouponDto extends PickType(Coupon, [
  'code',
  'type',
  'amount',
  'description',
  'image',
  'expire_at',
  'active_from',
]) {}
