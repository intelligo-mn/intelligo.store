import isEmpty from "lodash/isEmpty";
import orderBy from "lodash/orderBy";

export function generateCartItemName(name: string, attributes: object) {
  if (!isEmpty(attributes)) {
    const sortedAttributes = orderBy(attributes);
    return `${name} - ${sortedAttributes.join(", ")}`;
  }
  return name;
}
