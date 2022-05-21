import { useMutation, useQueryClient } from "react-query";
import Shop from "@repositories/shop";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const useDeleteShopMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Shop.delete(`${API_ENDPOINTS.SHOPS}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.SHOPS);
      },
    }
  );
};
