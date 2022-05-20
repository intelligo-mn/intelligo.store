import { CreateCouponInput } from './create-coupon.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCouponInput extends PartialType(CreateCouponInput) {
  @Field(() => ID)
  id: number;
}
