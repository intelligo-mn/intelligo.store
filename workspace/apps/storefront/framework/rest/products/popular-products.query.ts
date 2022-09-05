import { Product, QueryParamsType } from "@framework/types";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import request from "@framework/utils/request";

const fetchPopularProducts = async ({ queryKey }: QueryParamsType) => {
  const [_key, params]: any = queryKey;
  const { limit = 10 } = params as { limit: number };

  const url = `${API_ENDPOINTS.POPULAR_PRODUCTS}?&limit=${limit}`;
  const { data } = await request.get(url);

  return data;
};

const usePopularProductsQuery = (options: {
  limit: number;
  shop_id?: number;
}) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.POPULAR_PRODUCTS, options],
    fetchPopularProducts
  );
};

export { usePopularProductsQuery, fetchPopularProducts };
