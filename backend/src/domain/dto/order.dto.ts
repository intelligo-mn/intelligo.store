/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  Length,
  Min,
  Max,
  Matches,
} from "class-validator";
import { BaseDTO } from "./base.dto";

import { OrderItemDTO } from "./order-item.dto";
import { CustomerDTO } from "./customer.dto";
import { OrderStatus } from "../enum/order-status";

/**
 * A Order DTO object.
 */
export class OrderDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiProperty({ description: "distributionDate field" })
  distributionDate: any;

  @IsNotEmpty()
  @ApiProperty({ enum: OrderStatus, description: "status enum field" })
  status: OrderStatus;

  @ApiProperty({ type: OrderItemDTO, description: "products relationship" })
  products: OrderItemDTO;

  @ApiProperty({ type: () => CustomerDTO, description: "manager relationship" })
  manager: CustomerDTO;
}
