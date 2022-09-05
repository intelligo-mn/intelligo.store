import { useMutation, useQueryClient } from "react-query";
import Type from "@repositories/type";
import { API_ENDPOINTS } from "@utils/api/endpoints";

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
