/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "./base.dto";
import { OrganizationDTO } from "./organization.dto";
import { ProductDTO } from "./product.dto";

/**
 * A Category DTO object.
 */
export class CategoryDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiProperty({ description: "name field" })
  name: string;

  @ApiProperty({ description: "description field", required: false })
  description: string;

  @ApiProperty({
    type: ProductDTO,
    isArray: true,
    description: "products relationship",
  })
  products: ProductDTO[];
}
