import { Coupon } from '../entities/coupon.entity';

export class VerifyCouponInput {
  code: string;
}
export class VerifyCouponResponse {
  is_valid: boolean;
  coupon: Coupon;
}
