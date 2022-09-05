import { QueryParamsType } from "@ts-types/custom.types";
import { useQuery } from "react-query";
import Product from "@repositories/product";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { Product as TProduct } from "@ts-types/generated";
import { stringifySearchQuery } from "@utils/data-mappers";

const fetchPopularProducts = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const { limit = 15, shop_id } = params as { limit: number; shop_id: number };
  const searchString = stringifySearchQuery({
    shop_id,
  });
  const url = `${API_ENDPOINTS.POPULAR_PRODUCTS}?search=${searchString}&limit=${limit}`;
  const { data } = await Product.popularProducts(url);
  return data;
};

const usePopularProductsQuery = (options: {
  limit: number;
  shop_id?: number;
}) => {
  return useQuery<TProduct[], Error>(
    [API_ENDPOINTS.POPULAR_PRODUCTS, options],
    fetchPopularProducts
  );
};

export { usePopularProductsQuery, fetchPopularProducts };
