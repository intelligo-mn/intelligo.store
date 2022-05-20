import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { GetOrdersDto, OrderPaginator } from './dto/get-orders.dto';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { GetOrderStatusesDto } from './dto/get-order-statuses.dto';
import { CheckoutVerificationDto } from './dto/verify-checkout.dto';
import { GetOrderFilesDto, OrderFilesPaginator } from './dto/get-downloads.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  async getOrders(@Query() query: GetOrdersDto): Promise<OrderPaginator> {
    return this.ordersService.getOrders(query);
  }

  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(+id);
  }

  @Get('tracking-number/:tracking_id')
  getOrderByTrackingNumber(@Param('tracking_id') tracking_id: string) {
    return this.ordersService.getOrderByTrackingNumber(tracking_id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }

  @Post('checkout/verify')
  verifyCheckout(@Query() query: CheckoutVerificationDto) {
    return this.ordersService.verifyCheckout(query);
  }
}

@Controller('order-status')
export class OrderStatusController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderStatusDto: CreateOrderStatusDto) {
    return this.ordersService.createOrderStatus(createOrderStatusDto);
  }

  @Get()
  findAll(@Query() query: GetOrderStatusesDto) {
    return this.ordersService.getOrderStatuses(query);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.ordersService.getOrderStatus(slug);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}

@Controller('downloads')
export class OrderFilesController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async getOrderFileItems(
    @Query() query: GetOrderFilesDto,
  ): Promise<OrderFilesPaginator> {
    return this.ordersService.getOrderFileItems(query);
  }

  @Post('digital_file')
  async getDigitalFileDownloadUrl(
    @Body('digital_file_id', ParseIntPipe) digitalFileId: number,
  ) {
    return this.ordersService.getDigitalFileDownloadUrl(digitalFileId);
  }
}
