import { ICategory } from 'src/app/shared/model/category.model';
import { IUnit } from 'src/app/shared/model/unit.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  category?: ICategory;
  unit?: IUnit;
}

export class Product implements IProduct {
  constructor(public id?: number, public name?: string, public description?: string, public category?: ICategory, public unit?: IUnit) {}
}
