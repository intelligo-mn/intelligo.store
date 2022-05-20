import { CreateTaxInput } from './create-tax.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTaxInput extends PartialType(CreateTaxInput) {
  @Field(() => ID)
  id: number;
}
