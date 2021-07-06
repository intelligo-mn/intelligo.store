/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "./base.dto";
import { CategoryDTO } from "./category.dto";

/**
 * A Product DTO object.
 */
export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  @ApiProperty({ description: "name field" })
  name: string;

  @ApiProperty({ description: "description field", required: false })
  description: string;

  @ApiProperty({
    type: () => CategoryDTO,
    description: "category relationship",
  })
  category: CategoryDTO;

  @ApiProperty({ description: "price field", required: true })
  price: string;

  @ApiProperty({ description: "active field", required: false })
  active: boolean;

  @ApiProperty({ description: "comment field", required: false })
  comment: string;
}
