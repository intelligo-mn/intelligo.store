import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@InputType('AttributeInputType', { isAbstract: true })
@ObjectType()
export class Analytics extends CoreEntity {
  totalRevenue?: number;
  totalShops?: number;
  todaysRevenue?: number;
  @Field(() => Int)
  totalOrders?: number;
  @Field(() => Int)
  newCustomers?: number;
  totalYearSaleByMonth?: TotalYearSaleByMonth[];
}

// @InputType('TotalYearSaleByMonthInputType', { isAbstract: true })
@ObjectType()
export class TotalYearSaleByMonth {
  total?: number;
  month?: string;
}
