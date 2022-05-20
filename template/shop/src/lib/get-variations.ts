import groupBy from 'lodash/groupBy';

export function getVariations(variations: object | undefined | null) {
  if (!variations) return {};
  return groupBy(variations, 'attribute.slug');
}
