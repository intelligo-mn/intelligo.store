import { AddPointsInput } from './add-points.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWalletInput extends PartialType(AddPointsInput) {
  @Field(() => Int)
  id: number;
}
