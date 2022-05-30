import { useMutation, useQueryClient } from "react-query";
import AttributeValue from "@intelligo/dashboard/repositories/attribute";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export const useDeleteAttributeValueMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) =>
      AttributeValue.delete(`${API_ENDPOINTS.ATTRIBUTE_VALUES}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ATTRIBUTE_VALUES);
      },
    }
  );
};
