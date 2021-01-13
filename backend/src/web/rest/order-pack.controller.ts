import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { OrderPackDTO } from '../../service/dto/order-pack.dto';
import { OrderPackService } from '../../service/order-pack.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../core';
import { HeaderUtil } from '../../core/header-util';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';

@Controller('api/order-packs')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('order-packs')
export class OrderPackController {
  logger = new Logger('OrderPackController');

  constructor(private readonly orderPackService: OrderPackService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: OrderPackDTO
  })
  async getAll(@Req() req: Request): Promise<OrderPackDTO[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.orderPackService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder()
    });
    HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
    return results;
  }

  
  @Get('/category/:id')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List records by category',
    type: OrderPackDTO
  })
  async getQuery(@Req() req: Request): Promise<OrderPackDTO[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.orderPackService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder()
    });
    HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
    return results;
  }

  @Get('/:id')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: OrderPackDTO
  })
  async getOne(@Param('id') id: string): Promise<OrderPackDTO> {
    return await this.orderPackService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Create orderPack' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: OrderPackDTO
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() orderPackDTO: OrderPackDTO): Promise<OrderPackDTO> {
    const created = await this.orderPackService.save(orderPackDTO);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'OrderPack', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Update orderPack' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: OrderPackDTO
  })
  async put(@Req() req: Request, @Body() orderPackDTO: OrderPackDTO): Promise<OrderPackDTO> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'OrderPack', orderPackDTO.id);
    return await this.orderPackService.update(orderPackDTO);
  }

  @Delete('/:id')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Delete orderPack' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.'
  })
  async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'OrderPack', id);
    return await this.orderPackService.deleteById(id);
  }
}
