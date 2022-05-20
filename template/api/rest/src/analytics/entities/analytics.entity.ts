import { CoreEntity } from 'src/common/entities/core.entity';

export class Analytics extends CoreEntity {
  totalRevenue?: number;
  totalShops?: number;
  todaysRevenue?: number;
  totalOrders?: number;
  newCustomers?: number;
  totalYearSaleByMonth?: TotalYearSaleByMonth[];
}

export class TotalYearSaleByMonth {
  total?: number;
  month?: string;
}
