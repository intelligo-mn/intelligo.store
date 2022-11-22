import { useQuery } from "react-query";
import { Category, QueryParamsType } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/endpoints";
import request from "@framework/utils/request";

export const fetchFeaturedCategories = async ({ queryKey }: QueryParamsType) => {
  const [_key, params]: any = queryKey;

  const { limit = 3 } = params as { limit: number };

  const url = `${API_ENDPOINTS.FEATURED_CATEGORIES}?limit=${limit}`

  const { data } = await request.get(url);

  return data;
}

export const useFeaturedCategoriesQuery = (options: { limit: number }) => {
  return useQuery<Category[], Error>(
    [API_ENDPOINTS.FEATURED_CATEGORIES, options],
    fetchFeaturedCategories
  );
}