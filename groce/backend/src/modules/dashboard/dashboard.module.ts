import { Module } from '@nestjs/common';
import { OrderModule } from '../order/order.module';
import { OrganizationModule } from '../organization/organization.module';
import { ProductModule } from '../product/product.module';
import { DashboardController } from './dashbaord.controller';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [ProductModule, OrderModule, OrganizationModule],
  controllers: [DashboardController],
  providers: [DashboardService],
  exports: [DashboardService]
})
export class DashboardModule {}
