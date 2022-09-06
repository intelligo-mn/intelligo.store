import { useMutation, useQueryClient } from "react-query";
import Product from "apps/dashboard/repositories/product";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Product.delete(`${API_ENDPOINTS.PRODUCTS}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.PRODUCTS);
      },
    }
  );
};
