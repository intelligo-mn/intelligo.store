import { ArgsType, Field, ID, Int } from '@nestjs/graphql';

@ArgsType()
export class GetPopularProductsArgs {
  @Field(() => Int)
  limit?: number;
  @Field(() => Int)
  shop_id?: number;
  @Field(() => Int)
  type_id?: number;
  @Field(() => Int)
  range?: number;
  @Field(() => String)
  type_slug?: string;
}
