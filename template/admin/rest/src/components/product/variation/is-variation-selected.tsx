import isEmpty from "lodash/isEmpty";

export function isVariationSelected(variations: any, attributes: any) {
  if (isEmpty(variations)) return true;
  if (!isEmpty(attributes)) {
    return Object.keys(variations).every((variation) =>
      attributes.hasOwnProperty(variation)
    );
  }
  return false;
}
