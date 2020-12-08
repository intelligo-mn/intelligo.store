import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * A DTO representing a login user.
 */
export class UserLoginDTO {
    @ApiProperty({ description: 'User password' })
    @IsString()
    readonly password: string;

    @ApiProperty({ description: 'User remember login', required: false })
    readonly rememberMe?: boolean;

    @ApiProperty({ description: 'User login name' })
    @IsString()
    readonly username: string;
}
