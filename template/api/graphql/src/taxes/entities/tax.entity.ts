import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
@InputType('TaxInputType', { isAbstract: true })
@ObjectType()
export class Tax extends CoreEntity {
  name: string;
  rate: number;
  @Field(() => Boolean, { defaultValue: true })
  is_global = true;
  country?: string;
  state?: string;
  zip?: string;
  city?: string;
  @Field(() => Int)
  priority?: number;
  on_shipping?: boolean;
}
