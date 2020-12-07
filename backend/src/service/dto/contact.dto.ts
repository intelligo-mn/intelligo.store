/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

/**
 * A Contact DTO object.
 */
export class ContactDTO extends BaseDTO {
  @ApiModelProperty({ description: 'phone field', required: false })
  phone: number;

  @ApiModelProperty({ description: 'email field', required: false })
  email: string;

  @ApiModelProperty({ description: 'address field', required: false })
  address: string;

  @ApiModelProperty({ description: 'lat field', required: false })
  lat: string;

  @ApiModelProperty({ description: 'lon field', required: false })
  lon: string;

  
}
