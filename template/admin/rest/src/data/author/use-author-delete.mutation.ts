import { useMutation, useQueryClient } from "react-query";
import Author from "@repositories/author";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const useDeleteAuthorMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Author.delete(`${API_ENDPOINTS.AUTHORS}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.AUTHORS);
      },
    }
  );
};
