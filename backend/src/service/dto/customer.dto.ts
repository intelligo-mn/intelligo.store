/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, Length, Min, Max, Matches } from 'class-validator';
import { BaseDTO } from './base.dto';

import { OrganizationDTO } from './organization.dto';
import { OrderDTO } from './order.dto';

/**
 * A Customer DTO object.
 */
export class CustomerDTO extends BaseDTO {
  @ApiModelProperty({ description: 'name field', required: false })
  name: string;

  @IsNotEmpty()
  @ApiModelProperty({ description: 'phone field' })
  phone: string;

  @IsNotEmpty()
  @ApiModelProperty({ description: 'addressLine1 field' })
  addressLine1: string;

  @ApiModelProperty({ description: 'addressLine2 field', required: false })
  addressLine2: string;

  @IsNotEmpty()
  @ApiModelProperty({ description: 'city field' })
  city: string;

  @IsNotEmpty()
  @ApiModelProperty({ description: 'country field' })
  country: string;

  @ApiModelProperty({ type: OrganizationDTO, isArray: true, description: 'organizations relationship' })
  organizations: OrganizationDTO[];

  @ApiModelProperty({ type: OrderDTO, isArray: true, description: 'orders relationship' })
  orders: OrderDTO[];

  
}
