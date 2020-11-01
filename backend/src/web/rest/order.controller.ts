import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import Order from '../../domain/order.entity';
import { OrderService } from '../../service/order.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';

@Controller('api/orders')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('orders')
export class OrderController {
  logger = new Logger('OrderController');

  constructor(private readonly orderService: OrderService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: Order,
  })
  async getAll(@Req() req: Request): Promise<Order[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.orderService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder(),
    });
    HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
    return results;
  }

  @Get('/:id')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Order,
  })
  async getOne(@Param('id') id: string): Promise<Order> {
    return await this.orderService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Order,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() order: Order): Promise<Order> {
    const created = await this.orderService.save(order);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Order', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Update order' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: Order,
  })
  async put(@Req() req: Request, @Body() order: Order): Promise<Order> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Order', order.id);
    return await this.orderService.update(order);
  }

  @Delete('/:id')
  @Roles(RoleType.USER)
  @ApiOperation({ summary: 'Delete order' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  async remove(@Req() req: Request, @Param('id') id: string): Promise<Order> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Order', id);
    const toDelete = await this.orderService.findById(id);
    return await this.orderService.delete(toDelete);
  }
}
