import Tax from "@repositories/tax";
import { useQuery } from "react-query";
import { Tax as TTax } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchTax = async (id: string) => {
  const { data } = await Tax.find(`${API_ENDPOINTS.TAXES}/${id}`);
  return data;
};

export const useTaxQuery = (id: string) => {
  return useQuery<TTax, Error>([API_ENDPOINTS.TAXES, id], () => fetchTax(id));
};
