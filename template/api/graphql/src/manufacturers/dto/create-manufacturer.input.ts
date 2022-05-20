import { Field, ID, InputType, OmitType } from '@nestjs/graphql';
import { Manufacturer } from '../entities/manufacturer.entity';

@InputType()
export class CreateManufacturerInput extends OmitType(Manufacturer, [
  'id',
  'created_at',
  'updated_at',
  'type',
]) {
  @Field(() => ID)
  shop_id?: number;
}
