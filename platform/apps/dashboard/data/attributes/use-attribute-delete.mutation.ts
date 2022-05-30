import { useMutation, useQueryClient } from "react-query";
import Attribute from "apps/dashboard/repositories/attribute";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export const useDeleteAttributeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Attribute.delete(`${API_ENDPOINTS.ATTRIBUTES}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ATTRIBUTES);
      },
    }
  );
};
