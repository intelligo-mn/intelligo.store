import camelcaseKeys from "camelcase-keys";
import pickBy from "lodash/pickBy";

interface PaginatorInfo {
  [key: string]: unknown;
}
type PaginatorOutputType = {
  hasMorePages: boolean;
  nextPageUrl: string;
  [key: string]: unknown;
};
export const mapPaginatorData = (obj: PaginatorInfo): PaginatorOutputType => {
  const formattedValues = camelcaseKeys(obj);
  return {
    ...(formattedValues as PaginatorOutputType),
    hasMorePages: formattedValues.lastPage !== formattedValues.currentPage,
  };
};

export const parseSearchString = (values: any) => {
  const parsedValues = pickBy(values);
  return Object.keys(parsedValues)
    .map((k) => {
      if (k === "type") {
        return `${k}.slug:${parsedValues[k]};`;
      }
      if (k === "category") {
        return `categories.slug:${parsedValues[k]};`;
      }
      return `${k}:${parsedValues[k]};`;
    })
    .join("")
    .slice(0, -1);
};