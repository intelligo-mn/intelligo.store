import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Attribute } from './attribute.entity';

@InputType('AttributeValueInputType', { isAbstract: true })
@ObjectType()
export class AttributeValue extends CoreEntity {
  @Field(() => Int)
  shop_id: number;
  value: string;
  meta?: string;
  attribute: Attribute;
}
