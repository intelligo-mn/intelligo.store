import { ROUTES } from "@utils/routes";
import Coupon from "@repositories/coupon";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export type VerifyCouponInputType = {
  code: string;
};

export const useVerifyCouponMutation = () => {
  // const queryClient = useQueryClient();
  // const router = useRouter();

  return useMutation(
    (variables: VerifyCouponInputType) =>
      Coupon.verify(API_ENDPOINTS.COUPONS, variables)
    // {
    //   onSuccess: () => {
    //     router.push(ROUTES.VERIFY_COUPONS);
    //   },
    //   // Always refetch after error or success:
    //   onSettled: () => {
    //     queryClient.invalidateQueries(API_ENDPOINTS.COUPONS);
    //   },
    // }
  );
};
