import { useMutation, useQueryClient } from "react-query";
import Type from "apps/dashboard/src/repositories/type";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export const useDeleteTypeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Type.delete(`${API_ENDPOINTS.TYPES}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.TYPES);
      },
    }
  );
};
