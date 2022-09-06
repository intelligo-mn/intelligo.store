import Category from "apps/dashboard/repositories/category";
import { useQuery } from "react-query";
import { Category as TCategory } from "apps/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export const fetchCategory = async (id: string) => {
  const { data } = await Category.find(`${API_ENDPOINTS.CATEGORIES}/${id}`);
  return data;
};

export const useCategoryQuery = (id: string) => {
  return useQuery<TCategory, Error>([API_ENDPOINTS.CATEGORIES, id], () =>
    fetchCategory(id)
  );
};
