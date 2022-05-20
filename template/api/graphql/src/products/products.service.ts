import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateProductInput } from './dto/create-product.input';
import { GetProductArgs } from './dto/get-product.args';
import { GetProductsArgs, ProductPaginator } from './dto/get-products.args';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import productsJson from './products.json';
import Fuse from 'fuse.js';
import { paginate } from 'src/common/pagination/paginate';
import { GetPopularProductsArgs } from './dto/get-popular-products.args';

const products = plainToClass(Product, productsJson);

const options = {
  keys: [
    'name',
    'type.slug',
    'categories.slug',
    'tags.slug',
    'status',
    'author.slug',
    'manufacturer.slug',
  ],
  threshold: 0.3,
};
const fuse = new Fuse(products, options);

@Injectable()
export class ProductsService {
  private products: Product[] = products;

  create(createProductInput: CreateProductInput) {
    return this.products[0];
  }

  getProducts({
    text,
    first,
    page,
    hasType,
    hasCategories,
    hasTags,
    hasAuthor,
    hasManufacturer,
    status,
    shop_id,
  }: GetProductsArgs): ProductPaginator {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: Product[] = this.products;
    // if (status) {
    //   data = fuse.search(status)?.map(({ item }) => item);
    // }
    if (text?.replace(/%/g, '')) {
      data = fuse.search(text)?.map(({ item }) => item);
    }
    if (hasType?.value) {
      data = fuse.search(hasType.value as unknown)?.map(({ item }) => item);
    }

    if (hasCategories?.value) {
      data = hasCategories?.value?.flatMap((singleValue) =>
        fuse.search(singleValue as unknown)?.map(({ item }) => item),
      );
    }

    if (hasTags?.value) {
      data = hasTags?.value?.flatMap((singleValue) =>
        fuse.search(singleValue as unknown)?.map(({ item }) => item),
      );
    }

    if (hasAuthor?.value) {
      data = hasAuthor?.value?.flatMap((singleValue) =>
        fuse.search(singleValue as unknown)?.map(({ item }) => item),
      );
    }

    if (hasManufacturer?.value) {
      data = hasManufacturer?.value?.flatMap((singleValue) =>
        fuse.search(singleValue as unknown)?.map(({ item }) => item),
      );
    }

    if (shop_id) {
      data = this.products.filter((p) => p.shop_id === Number(shop_id));
    }
    const results = data.slice(startIndex, endIndex);
    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  getProduct({ id, slug }: GetProductArgs): Product {
    if (id) {
      return this.products.find((p) => p.id === Number(id));
    }
    return this.products.find((p) => p.slug === slug);
  }

  getRelatedProducts({ id, slug }: GetProductArgs): Product[] {
    return this.products?.filter((p) => p.type.slug === slug).slice(0, 10);
  }

  getPopularProducts({ limit, type_slug }: GetPopularProductsArgs): Product[] {
    let data: Product[] = this.products;

    if (type_slug) {
      data = fuse.search(type_slug as unknown)?.map(({ item }) => item);
    }

    return data.slice(0, limit);
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.products[0];
  }

  remove(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
