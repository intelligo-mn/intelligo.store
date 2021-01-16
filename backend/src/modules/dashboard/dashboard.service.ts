import { Injectable, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StatisticDTO } from "src/domain/dto/Dashboard.dto";
import { FindManyOptions, FindOneOptions } from "typeorm";
import { CategoryDTO } from "../../domain/dto/category.dto";
import { OrderService } from "../order/order.service";
import { OrganizationService } from "../organization/organization.service";
import { ProductService } from "../product/product.service";

const relationshipNames = [];

@Injectable()
export class DashboardService {
  logger = new Logger("CategoryService");

  constructor(
    private productService: ProductService,
    private orgService: OrganizationService,
    private orderService: OrderService,
  ) {}

  async counts(): Promise<StatisticDTO> {
    const count = new StatisticDTO();
    return count;
  }
}
