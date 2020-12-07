import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * A DTO representing a login user.
 */
export class UserLoginDTO {
    @ApiModelProperty({ description: 'User password' })
    @IsString()
    readonly password: string;

    @ApiModelProperty({ description: 'User remember login', required: false })
    readonly rememberMe?: boolean;

    @ApiModelProperty({ description: 'User login name' })
    @IsString()
    readonly username: string;
}
