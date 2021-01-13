import { Controller, Get, Logger, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../core';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from '../../service/auth.service';

@Controller('api/users')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('Identity')
export class AuthController {
    logger = new Logger('AuthController');

    constructor(private readonly authService: AuthService) {}

    @Get('/authorities')
    @ApiOperation({ summary: 'Get the list of user roles' })
    @ApiResponse({
        status: 200,
        description: 'List all user roles',
        type: 'string',
        isArray: true,
    })
    @Roles(RoleType.ADMIN)
    getAuthorities(@Req() req: any): any {
        const user: any = req.user;
        return user.authorities;
    }
}
