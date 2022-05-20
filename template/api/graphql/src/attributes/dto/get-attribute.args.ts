import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetAttributeArgs {
  @Field(() => ID)
  id?: number;
  slug?: string;
}
