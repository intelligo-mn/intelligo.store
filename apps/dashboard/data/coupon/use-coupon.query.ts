import Coupon from "@repositories/coupon";
import { useQuery } from "react-query";
import { Coupon as TCoupon } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchCoupon = async (id: string) => {
  const { data } = await Coupon.find(`${API_ENDPOINTS.COUPONS}/${id}`);
  return data;
};

export const useCouponQuery = (id: string) => {
  return useQuery<TCoupon, Error>([API_ENDPOINTS.COUPONS, id], () =>
    fetchCoupon(id)
  );
};
