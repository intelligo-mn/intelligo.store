import Base from "./base";

import { ShippingInput, ShippingUpdateInput } from "@ts-types/generated";

class Shipping extends Base<ShippingInput, ShippingUpdateInput> {}

export default new Shipping();
