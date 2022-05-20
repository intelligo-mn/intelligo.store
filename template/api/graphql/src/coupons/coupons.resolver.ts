import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CouponsService } from './coupons.service';
import { Coupon } from './entities/coupon.entity';
import { CreateCouponInput } from './dto/create-coupon.input';
import { UpdateCouponInput } from './dto/update-coupon.input';
import { CouponPaginator, GetCouponsArgs } from './dto/get-coupons.args';
import { GetCouponArgs } from './dto/get-coupon.args';
import { VerifyCouponResponse } from './dto/verify-coupon.input';

@Resolver(() => Coupon)
export class CouponsResolver {
  constructor(private readonly couponsService: CouponsService) {}

  @Mutation(() => Coupon)
  createCoupon(@Args('input') createCouponInput: CreateCouponInput) {
    return this.couponsService.create(createCouponInput);
  }

  @Query(() => CouponPaginator, { name: 'coupons' })
  async getCoupons(
    @Args() getCouponsArgs: GetCouponsArgs,
  ): Promise<CouponPaginator> {
    return this.couponsService.getCoupons(getCouponsArgs);
  }

  @Query(() => Coupon, { name: 'coupon' })
  async getCoupon(@Args() getCouponArgs: GetCouponArgs): Promise<Coupon> {
    return this.couponsService.getCoupon(getCouponArgs);
  }

  @Mutation(() => Coupon)
  updateCoupon(@Args('input') updateCouponInput: UpdateCouponInput) {
    return this.couponsService.update(updateCouponInput.id, updateCouponInput);
  }

  @Mutation(() => Coupon)
  deleteCoupon(@Args('id', { type: () => ID }) id: number) {
    return this.couponsService.remove(id);
  }

  @Mutation(() => VerifyCouponResponse)
  verifyCoupon(@Args('code') code: string): VerifyCouponResponse {
    return this.couponsService.verifyCoupon(code);
  }
}
