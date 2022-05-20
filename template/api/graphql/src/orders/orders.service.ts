import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import {
  CheckoutVerificationInput,
  VerifiedCheckoutData,
} from './dto/verify-checkout.input';
import ordersJson from './orders.json';
import orderStatusJson from './order-statuses.json';
import orderFilesJson from './order-files.json';
import { paginate } from 'src/common/pagination/paginate';
import { plainToClass } from 'class-transformer';
import { Order } from './entities/order.entity';
import { GetOrdersArgs, OrderPaginator } from './dto/get-orders.args';
import { GetOrderArgs } from './dto/get-order.args';
import {
  GetOrderStatusesArgs,
  OrderStatusPaginator,
} from './dto/get-order-statuses.args';
import { OrderStatus } from './entities/order-status.entity';
import {
  CreateOrderStatusInput,
  UpdateOrderStatusInput,
} from './dto/create-order-status.input';
import { GetOrderFilesPaginator } from './dto/get-order-file.args';
import { OrderFiles } from './entities/order.entity';
import { GenerateDownloadableUrlInput } from './dto/generate-downloadable-url.input';

const orders = plainToClass(Order, ordersJson);
const orderStatus = plainToClass(OrderStatus, orderStatusJson);
const orderFiles = plainToClass(OrderFiles, orderFilesJson);

@Injectable()
export class OrdersService {
  private orders: Order[] = orders;
  private orderStatus: OrderStatus[] = orderStatus;
  private orderFiles: OrderFiles[] = orderFiles;

  create(createOrderInput: CreateOrderInput) {
    return this.orders[0];
  }

  getOrders({
    first,
    page,
    customer_id,
    tracking_number,
    shop_id,
  }: GetOrdersArgs): OrderPaginator {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: Order[] = this.orders;

    if (shop_id) {
      data = this.orders?.filter((p) => p?.shop?.id === Number(shop_id));
    }
    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  getOrder({ id, tracking_number }: GetOrderArgs): Order {
    let parentOrder = undefined;
    if (id) {
      parentOrder = this.orders.find((p) => p.id === Number(id));
    } else {
      parentOrder = this.orders.find(
        (p) => p.tracking_number === tracking_number,
      );
    }
    if (!parentOrder) {
      return this.orders[0];
    }
    return parentOrder;
  }

  getOrderStatuses({
    first,
    page,
    text,
    orderBy,
  }: GetOrderStatusesArgs): OrderStatusPaginator {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    const data: OrderStatus[] = this.orderStatus;

    // if (shop_id) {
    //   data = this.orders?.filter((p) => p?.shop?.id === shop_id);
    // }
    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  getOrderStatus(id: number) {
    return this.orderStatus.find((p) => p.id === Number(id));
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return this.orders[0];
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  verifyCheckout(input: CheckoutVerificationInput): VerifiedCheckoutData {
    return {
      total_tax: 0,
      shipping_charge: 0,
      unavailable_products: [],
      wallet_amount: 0,
      wallet_currency: 0,
    };
  }

  createOrderStatus(createOrderStatusInput: CreateOrderStatusInput) {
    return this.orderStatus[0];
  }

  updateOrderStatus(updateOrderStatusInput: UpdateOrderStatusInput) {
    return this.orderStatus[0];
  }

  async getOrderFileItems({ first, page }: GetOrderFilesPaginator) {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: OrderFiles[] = this.orderFiles;

    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  async getDigitalFileDownloadUrl({
    digital_file_id,
  }: GenerateDownloadableUrlInput) {
    const item: OrderFiles = this.orderFiles.find(
      (singleItem) => singleItem.digital_file_id === digital_file_id,
    );

    return item.file.url;
  }
}
