import { ICategory } from 'src/app/shared/model/category.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  category?: ICategory;
  price?: number;
}

export class Product implements IProduct {
  constructor(public id?: number, public name?: string, public description?: string, public category?: ICategory, public price?: number) {}
}
