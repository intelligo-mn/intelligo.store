import { CouponInput, CouponUpdateInput } from "apps/dashboard/ts-types/generated";
import Base from "./base";

class Coupon extends Base<CouponInput, CouponUpdateInput> {}

export default new Coupon();
