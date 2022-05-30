import Tax from "apps/dashboard/repositories/tax";
import { useQuery } from "react-query";
import { Tax as TTax } from "apps/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export const fetchTax = async (id: string) => {
  const { data } = await Tax.find(`${API_ENDPOINTS.TAXES}/${id}`);
  return data;
};

export const useTaxQuery = (id: string) => {
  return useQuery<TTax, Error>([API_ENDPOINTS.TAXES, id], () => fetchTax(id));
};
