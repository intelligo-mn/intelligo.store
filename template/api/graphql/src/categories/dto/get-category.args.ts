import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetCategoryArgs {
  @Field(() => ID)
  id?: number;
  slug?: string;
}
