import {
  QueryParamsType,
  ProductsQueryOptionsType,
} from "@ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Product from "@repositories/product";
import { API_ENDPOINTS } from "@utils/api/endpoints";

const fetchProducts = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    page,
    text,
    type,
    category,
    shop_id,
    status,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as ProductsQueryOptionsType;
  const searchString = stringifySearchQuery({
    name: text,
    type,
    category,
    status,
    shop_id,
  });
  const url = `${API_ENDPOINTS.PRODUCTS}?with=shop;type&search=${searchString}&searchJoin=and&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await Product.all(url);
  return { products: { data, paginatorInfo: mapPaginatorData({ ...rest }) } };
};

const useProductsQuery = (
  params: ProductsQueryOptionsType,
  options: any = {}
) => {
  return useQuery<any, Error>([API_ENDPOINTS.PRODUCTS, params], fetchProducts, {
    ...options,
    keepPreviousData: true,
  });
};

export { useProductsQuery, fetchProducts };
