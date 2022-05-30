import { useMutation, useQueryClient } from "react-query";
import Coupon from "apps/dashboard/src/repositories/coupon";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export const useDeleteCouponMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: string) => Coupon.delete(`${API_ENDPOINTS.COUPONS}/${id}`),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.COUPONS);
      },
    }
  );
};
