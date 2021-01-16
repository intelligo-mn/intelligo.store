/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty
} from "class-validator";
import { OrderStatus } from "../enum/order-status";
import { BaseDTO } from "./base.dto";
import { OrderItemDTO } from "./order-item.dto";
import { UserDTO } from "./user.dto";


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

  @ApiProperty({ type: () => UserDTO, description: "manager relationship" })
  manager: UserDTO;
}
