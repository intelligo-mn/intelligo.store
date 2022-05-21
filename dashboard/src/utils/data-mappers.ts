import { PaginatorInfo } from "@ts-types/generated";
import camelcaseKeys from "camelcase-keys";
import pickBy from "lodash/pickBy";

interface PaginatorInfoType {
  [key: string]: unknown;
}

export const mapPaginatorData = (obj: PaginatorInfoType): PaginatorInfo => {
  const formattedValues = camelcaseKeys(obj);
  return {
    ...(formattedValues as PaginatorInfo),
    hasMorePages: formattedValues?.lastPage !== formattedValues?.currentPage,
  };
};

export const stringifySearchQuery = (values: any) => {
  const parsedValues = pickBy(values);
  return Object.keys(parsedValues)
    .map((k) => {
      if (k === "type") {
        return `${k}.slug:${parsedValues[k]};`;
      }
      if (k === "category") {
        return `categories.slug:${parsedValues[k]};`;
      }
      if (k === "is_approved") {
        if (parsedValues[k] === true) {
          return `${k}:1;`;
        } else {
          return `${k}:;`;
        }
      }
      return `${k}:${parsedValues[k]};`;
    })
    .join("")
    .slice(0, -1);
};
