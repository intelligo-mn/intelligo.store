import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @IsNotEmpty()
  @Field(() => ID)
  id: number;
}
