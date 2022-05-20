import { useMutation, useQueryClient } from "react-query";
import Manufacturer from "@repositories/manufacturer";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const useDeleteManufacturerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Manufacturer.delete(`${API_ENDPOINTS.MANUFACTURERS}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.MANUFACTURERS);
      },
    }
  );
};
