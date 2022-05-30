import { useMutation, useQueryClient } from "react-query";
import Tag from "@intelligo/dashboard/repositories/tag";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export const useDeleteTagMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Tag.delete(`${API_ENDPOINTS.TAGS}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.TAGS);
      },
    }
  );
};
