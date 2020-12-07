import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { OrderItemDTO } from '../../service/dto/order-item.dto';
import { OrderItemService } from '../../service/order-item.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../core/header-util';
import { LoggingInterceptor } from '../../core/interceptors/logging.interceptor';

@Controller('api/order-items')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('order-items')
export class OrderItemController {
  logger = new Logger('OrderItemController');

  constructor(private readonly orderItemService: OrderItemService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: OrderItemDTO
  })
  async getAll(@Req() req: Request): Promise<OrderItemDTO[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.orderItemService.findAndCount({
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
    type: OrderItemDTO
  })
  async getOne(@Param('id') id: string): Promise<OrderItemDTO> {
    return await this.orderItemService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Create orderItem' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: OrderItemDTO
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() orderItemDTO: OrderItemDTO): Promise<OrderItemDTO> {
    const created = await this.orderItemService.save(orderItemDTO);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'OrderItem', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Update orderItem' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: OrderItemDTO
  })
  async put(@Req() req: Request, @Body() orderItemDTO: OrderItemDTO): Promise<OrderItemDTO> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'OrderItem', orderItemDTO.id);
    return await this.orderItemService.update(orderItemDTO);
  }

  @Delete('/:id')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'Delete orderItem' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.'
  })
  async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'OrderItem', id);
    return await this.orderItemService.deleteById(id);
  }
}
