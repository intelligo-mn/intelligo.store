import { useMutation, useQueryClient } from "react-query";
import User from "@intelligo/dashboard/repositories/user";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export const useBlockUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: number) => User.block(API_ENDPOINTS.BLOCK_USER, { id }),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.USERS);
        queryClient.invalidateQueries(API_ENDPOINTS.STAFFS);
      },
    }
  );
};
