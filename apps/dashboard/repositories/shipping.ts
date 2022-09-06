import Base from "./base";

import { ShippingInput, ShippingUpdateInput } from "apps/dashboard/ts-types/generated";

class Shipping extends Base<ShippingInput, ShippingUpdateInput> {}

export default new Shipping();
