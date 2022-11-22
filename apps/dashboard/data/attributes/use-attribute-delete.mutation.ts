import { useMutation, useQueryClient } from "react-query";
import Attribute from "@repositories/attribute";
import { API_ENDPOINTS } from "@utils/api/endpoints";

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
