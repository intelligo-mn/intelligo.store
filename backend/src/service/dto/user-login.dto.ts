import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserLoginDTO {
  @ApiProperty({ description: 'User password', required: true })
  @IsString()
  readonly password: string;

  @ApiProperty({ description: 'User remember login', required: false })
  readonly rememberMe: boolean;

  @ApiProperty({ description: 'User login name', required: true })
  @IsString()
  readonly username: string;
}
