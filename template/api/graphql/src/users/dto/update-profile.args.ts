import { Field, ArgsType, ID } from '@nestjs/graphql';
import { ProfileInput } from './create-profile.input';

@ArgsType()
export class UpdateProfileArgs {
  @Field(() => ID)
  id: number;
  input: ProfileInput;
}
