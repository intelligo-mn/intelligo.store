import Manufacturer from "@repositories/manufacturer";
import { useQuery } from "react-query";
import { Manufacturer as TManufacturer } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchManufacturer = async (id: string) => {
  const { data } = await Manufacturer.find(
    `${API_ENDPOINTS.MANUFACTURERS}/${id}`
  );
  return data;
};

export const useManufacturerQuery = (id: string) => {
  return useQuery<TManufacturer, Error>([API_ENDPOINTS.MANUFACTURERS, id], () =>
    fetchManufacturer(id)
  );
};
