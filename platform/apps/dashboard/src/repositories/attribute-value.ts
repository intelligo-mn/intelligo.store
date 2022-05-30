import Base from "./base";

import {
  AttributeValueCreateInput,
  AttributeValueUpdateInput,
} from "@intelligo/dashboard/ts-types/generated";

class AttributeValue extends Base<
  AttributeValueCreateInput,
  AttributeValueUpdateInput
> {}

export default new AttributeValue();
