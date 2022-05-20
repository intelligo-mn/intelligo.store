import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetTypeArgs {
  @Field(() => ID)
  id?: number;
  slug?: string;
}
