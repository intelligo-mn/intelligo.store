import { IOrganization } from 'src/app/shared/model/organization.model';
import { IOrder } from 'src/app/shared/model/order.model';

export interface ICustomer {
  id?: number;
  name?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  country?: string;
  organizations?: IOrganization[];
  orders?: IOrder[];
}

export class Customer implements ICustomer {
  constructor(
    public id?: number,
    public name?: string,
    public phone?: string,
    public addressLine1?: string,
    public addressLine2?: string,
    public city?: string,
    public country?: string,
    public organizations?: IOrganization[],
    public orders?: IOrder[]
  ) {}
}
