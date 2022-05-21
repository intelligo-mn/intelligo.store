import { VerifyCouponInputType } from "@data/coupon/use-verify-coupon-mutation";
import { CouponInput, CouponUpdateInput } from "@ts-types/generated";
import Base from "./base";

class Coupon extends Base<CouponInput, CouponUpdateInput> {
  verify = async (url: string, variables: VerifyCouponInputType) => {
    {
      return this.http<VerifyCouponInputType>(url, "post", variables);
    }
  };
}

export default new Coupon();
