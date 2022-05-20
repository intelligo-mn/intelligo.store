import { CreateManufacturerInput } from './create-manufacturer.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateManufacturerInput extends PartialType(
  CreateManufacturerInput,
) {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  type_id: number;
}
