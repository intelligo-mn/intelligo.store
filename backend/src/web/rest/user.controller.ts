import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { UserDTO } from '../../service/dto/user.dto';
import { HeaderUtil } from '../../core/header-util';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../../service/user.service';

@Controller('api/users')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('user-resource')
export class UserController {
    logger = new Logger('UserController');

    constructor(private readonly userService: UserService) {}

    @Get('/')
    @Roles(RoleType.ADMIN)
    @ApiResponse({
        status: 200,
        description: 'List all records',
        type: UserDTO,
    })
    async getAllUsers(@Req() req: Request): Promise<UserDTO[]> {
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
        const [results, count] = await this.userService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Post('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: UserDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createUser(@Req() req: Request, @Body() userDTO: UserDTO): Promise<UserDTO> {
        userDTO.password = userDTO.login;
        const created = await this.userService.save(userDTO);
        HeaderUtil.addEntityCreatedHeaders(req.res, 'User', created.id);
        return created;
    }

    @Put('/')
    @Roles(RoleType.ADMIN)
    @ApiOperation({ summary: 'Update user' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: UserDTO,
    })
    async updateUser(@Req() req: Request, @Body() userDTO: UserDTO): Promise<UserDTO> {
        const userOnDb = await this.userService.find({ where: { login: userDTO.login } });
        let updated = false;
        if (userOnDb && userOnDb.id) {
            userDTO.id = userOnDb.id;
            updated = true;
        } else {
            userDTO.password = userDTO.login;
        }
        const createdOrUpdated = await this.userService.update(userDTO);
        if (updated) {
            HeaderUtil.addEntityUpdatedHeaders(req.res, 'User', createdOrUpdated.id);
        } else {
            HeaderUtil.addEntityCreatedHeaders(req.res, 'User', createdOrUpdated.id);
        }
        return createdOrUpdated;
    }

    @Get('/:login')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: UserDTO,
    })
    async getUser(@Param('login') loginValue: string): Promise<UserDTO> {
        return await this.userService.find({ where: { login: loginValue } });
    }

    @Delete('/:login')
    @ApiOperation({ summary: 'Delete login user' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
        type: UserDTO,
    })
    @Roles(RoleType.ADMIN)
    async deleteUser(@Req() req: Request, @Param('login') loginValue: string): Promise<UserDTO> {
        HeaderUtil.addEntityDeletedHeaders(req.res, 'User', loginValue);
        const userToDelete = await this.userService.find({ where: { login: loginValue } });
        return await this.userService.delete(userToDelete);
    }
}
