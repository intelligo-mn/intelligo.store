import { useMutation, useQueryClient } from "react-query";
import Shop from "@repositories/shop";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const useRemoveStaffMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Shop.removeStaff(`${API_ENDPOINTS.REMOVE_STAFF}/${id}`, id),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.STAFFS);
      },
    }
  );
};
