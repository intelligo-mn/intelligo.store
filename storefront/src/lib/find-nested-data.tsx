const findNestedData: any = (
  array: any[] | undefined,
  query: any,
  nestingKey?: string
) =>
  array?.reduce((prev, curr) => {
    if (prev) return prev;
    if (curr.slug === query) return curr;
    if (curr[nestingKey!])
      return findNestedData(curr[nestingKey!], query, nestingKey);
  }, null);

export default findNestedData;
