import Type from "apps/dashboard/src/repositories/type";
import { useQuery } from "react-query";
import { Type as TType } from "apps/dashboard/src/ts-types/generated";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export const fetchType = async (slug: string) => {
  const { data } = await Type.find(`${API_ENDPOINTS.TYPES}/${slug}`);
  return data;
};

export const useTypeQuery = (slug: string) => {
  return useQuery<TType, Error>([API_ENDPOINTS.TYPES, slug], () =>
    fetchType(slug)
  );
};
