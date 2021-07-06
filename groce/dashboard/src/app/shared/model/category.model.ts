import { IProduct } from 'src/app/shared/model/product.model';
import { IOrganization } from 'src/app/shared/model/organization.model';

export interface ICategory {
  id?: number;
  name?: string;
  description?: string;
  products?: IProduct[];
  organizations?: IOrganization[];
}

export class Category implements ICategory {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public products?: IProduct[],
    public organizations?: IOrganization[]
  ) {}
}
