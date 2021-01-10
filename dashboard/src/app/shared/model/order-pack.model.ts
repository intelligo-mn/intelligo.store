import { Moment } from 'moment';
import { IProduct } from 'src/app/shared/model/product.model';
import { OrderPackStatus } from 'src/app/shared/model/enums/order-pack-status.model';

export interface IOrderPack {
  id?: number;
  name?: string;
  startDate?: Moment;
  endDate?: Moment;
  status?: OrderPackStatus;
  products?: IProduct;
}

export class OrderPack implements IOrderPack {
  constructor(
    public id?: number,
    public name?: string,
    public startDate?: Moment,
    public endDate?: Moment,
    public status?: OrderPackStatus,
    public products?: IProduct
  ) {}
}
