import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class CoreGetArguments {
  @Field(() => ID)
  id?: number;
  slug?: string;
}
