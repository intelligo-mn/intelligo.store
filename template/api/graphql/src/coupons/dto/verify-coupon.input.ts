import { InputType, ObjectType } from '@nestjs/graphql';
import { Coupon } from '../entities/coupon.entity';

@InputType()
export class VerifyCouponInput {
  code: string;
}
@ObjectType()
export class VerifyCouponResponse {
  is_valid: boolean;
  coupon: Coupon;
}
