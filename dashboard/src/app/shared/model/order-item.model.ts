import { IOrder } from 'src/app/shared/model/order.model';
import { IProduct } from 'src/app/shared/model/product.model';

export interface IOrderItem {
  id?: number;
  quantity?: number;
  orders?: IOrder[];
  products?: IProduct;
}

export class OrderItem implements IOrderItem {
  constructor(public id?: number, public quantity?: number, public orders?: IOrder[], public products?: IProduct) {}
}
