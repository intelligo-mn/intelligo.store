import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@InputType('WalletInputType', { isAbstract: true })
@ObjectType()
export class Wallet extends CoreEntity {
  @Field(() => Int)
  total_points: number;
  @Field(() => Int)
  points_used: number;
  @Field(() => Int)
  available_points: number;
}
