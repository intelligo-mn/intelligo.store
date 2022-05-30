import { useMutation, useQueryClient } from "react-query";
import Tax from "apps/dashboard/src/repositories/tax";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export const useDeleteTaxMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Tax.delete(`${API_ENDPOINTS.TAXES}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.TAXES);
      },
    }
  );
};
