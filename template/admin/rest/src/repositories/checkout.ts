import { VerifyCheckoutInputType } from "@data/checkout/use-verify-checkout-mutation";
import Base from "./base";

class Checkout extends Base<VerifyCheckoutInputType, VerifyCheckoutInputType> {
  verify = async (url: string, variables: VerifyCheckoutInputType) => {
    {
      return this.http<VerifyCheckoutInputType>(url, "post", variables);
    }
  };
}

export default new Checkout();
