import Type from "@intelligo/dashboard/repositories/type";
import { useQuery } from "react-query";
import { Type as TType } from "@intelligo/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export const fetchType = async (slug: string) => {
  const { data } = await Type.find(`${API_ENDPOINTS.TYPES}/${slug}`);
  return data;
};

export const useTypeQuery = (slug: string) => {
  return useQuery<TType, Error>([API_ENDPOINTS.TYPES, slug], () =>
    fetchType(slug)
  );
};
