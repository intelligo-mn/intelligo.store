import { CouponUpdateInput } from "apps/dashboard/ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Coupon from "apps/dashboard/repositories/coupon";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";
import { useTranslation } from "next-i18next";
export interface ICouponUpdateVariables {
  variables: { id: number | string; input: CouponUpdateInput };
}

export const useUpdateCouponMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { id, input } }: ICouponUpdateVariables) =>
      Coupon.update(`${API_ENDPOINTS.COUPONS}/${id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.COUPONS);
      },
    }
  );
};
