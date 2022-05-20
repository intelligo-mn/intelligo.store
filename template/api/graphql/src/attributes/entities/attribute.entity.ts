import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { AttributeValue } from './attribute-value.entity';

@InputType('AttributeInputType', { isAbstract: true })
@ObjectType()
export class Attribute extends CoreEntity {
  name: string;
  @Field(() => Int)
  shop_id: number;
  shop: Shop;
  slug: string;
  values: AttributeValue[];
}
