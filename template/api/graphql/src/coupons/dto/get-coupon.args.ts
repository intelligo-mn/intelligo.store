import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetCouponArgs {
  @Field(() => ID)
  id?: number;
  code?: string;
}
