/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

/**
 * A Contact DTO object.
 */
export class ContactDTO extends BaseDTO {
  
  @ApiProperty({ description: 'organization id', required: false })
  organizationId: string;

  @ApiProperty({ description: 'phone field', required: false })
  phone: number;

  @ApiProperty({ description: 'email field', required: false })
  email: string;

  @ApiProperty({ description: 'address field', required: false })
  address: string;

  @ApiProperty({ description: 'lat field', required: false })
  lat: string;

  @ApiProperty({ description: 'lon field', required: false })
  lon: string;

  
}
