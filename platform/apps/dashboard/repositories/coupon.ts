import { CouponInput, CouponUpdateInput } from "apps/dashboard/src/ts-types/generated";
import Base from "./base";

class Coupon extends Base<CouponInput, CouponUpdateInput> {}

export default new Coupon();
