import { IProduct } from 'src/app/shared/model/product.model';

export interface IUnit {
  id?: number;
  name?: string;
  description?: string;
  value?: string;
  products?: IProduct[];
}

export class Unit implements IUnit {
  constructor(public id?: number, public name?: string, public description?: string, public value?: string, public products?: IProduct[]) {}
}
