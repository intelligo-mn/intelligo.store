import { Injectable, Logger } from "@nestjs/common";
import { StatisticDTO } from "./../../domain/dto/dashboard.dto";
import { OrderService } from "../order/order.service";
import { OrganizationService } from "../organization/organization.service";
import { ProductService } from "../product/product.service";
import { resolve } from "path";

const relationshipNames = [];

@Injectable()
export class DashboardService {
  logger = new Logger("CategoryService");

  constructor(
    private productService: ProductService,
    private orgService: OrganizationService,
    private orderService: OrderService
  ) {}

  async counts(): Promise<StatisticDTO> {
    const [
      kinderGardenCount,
      supplierCount,
      productCount,
      orderCount,
    ] = await Promise.all([
      this.orgService.getCount(),
      this.orgService.getCount(),
      this.productService.getCount(),
      this.orderService.getCount(),
    ]);
    const count = new StatisticDTO();
    count.orderCount = orderCount;
    count.kinderGardenCount = kinderGardenCount;
    count.productCount = productCount;
    count.supplierCount = supplierCount;

    return count;
  }
}
