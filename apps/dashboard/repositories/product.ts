import { CreateProduct, UpdateProduct } from "apps/dashboard/ts-types/generated";
import Base from "./base";

class Product extends Base<CreateProduct, UpdateProduct> {
  popularProducts = (url: string) => {
    return this.http(url, "get");
  };
}

export default new Product();
