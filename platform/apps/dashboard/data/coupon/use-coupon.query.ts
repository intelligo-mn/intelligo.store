import Coupon from "apps/dashboard/repositories/coupon";
import { useQuery } from "react-query";
import { Coupon as TCoupon } from "apps/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export const fetchCoupon = async (id: string) => {
  const { data } = await Coupon.find(`${API_ENDPOINTS.COUPONS}/${id}`);
  return data;
};

export const useCouponQuery = (id: string) => {
  return useQuery<TCoupon, Error>([API_ENDPOINTS.COUPONS, id], () =>
    fetchCoupon(id)
  );
};
