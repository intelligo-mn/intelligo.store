import { useMutation, useQueryClient } from "react-query";
import User from "apps/dashboard/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export const useUnblockUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: number) => User.unblock(API_ENDPOINTS.UNBLOCK_USER, { id }),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.USERS);
        queryClient.invalidateQueries(API_ENDPOINTS.STAFFS);
      },
    }
  );
};
