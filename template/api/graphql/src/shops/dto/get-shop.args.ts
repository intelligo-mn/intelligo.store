import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetShopArgs {
  @Field(() => ID)
  id?: number;
  slug?: string;
}
