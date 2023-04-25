import { CouponInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import Coupon from "@repositories/coupon";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface ICouponCreateVariables {
  variables: { input: CouponInput };
}

export const useCreateCouponMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: ICouponCreateVariables) =>
      Coupon.create(API_ENDPOINTS.COUPONS, input),
    {
      onSuccess: () => {
        router.push(ROUTES.COUPONS);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.COUPONS);
      },
    }
  );
};
