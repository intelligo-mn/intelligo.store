/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/**
 * A Category DTO object.
 */
export class StatisticDTO {
  @IsNotEmpty()
  @ApiProperty({ description: "kinder garden count" })
  kinderGardenCount: number;

  @ApiProperty({ description: "supplier count", required: false })
  supplierCount: string;

  @ApiProperty({ description: "customer count", required: false })
  customerCount: string;

  @ApiProperty({ description: "product count", required: false })
  productCount: string;
}
