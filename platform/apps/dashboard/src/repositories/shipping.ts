import Base from "./base";

import { ShippingInput, ShippingUpdateInput } from "@intelligo/dashboard/ts-types/generated";

class Shipping extends Base<ShippingInput, ShippingUpdateInput> {}

export default new Shipping();
