import { QueryParamsType, QueryOptionsType } from "@intelligo/dashboard/ts-types/custom.types";
import { stringifySearchQuery } from "@intelligo/dashboard/utils/data-mappers";
import { useQuery } from "react-query";
import AttributeValue from "@intelligo/dashboard/repositories/attribute-value";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

const fetchAttributeValues = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    text,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as QueryOptionsType;
  const searchString = stringifySearchQuery({
    name: text,
  });
  const url = `${API_ENDPOINTS.ATTRIBUTE_VALUES}?search=${searchString}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const { data } = await AttributeValue.all(url);
  return { attributeValues: data };
};

const useAttributeValuesQuery = (options: QueryOptionsType = {}) => {
  return useQuery<any, Error>(
    [API_ENDPOINTS.ATTRIBUTE_VALUES, options],
    fetchAttributeValues,
    {
      keepPreviousData: true,
    }
  );
};

export { useAttributeValuesQuery, fetchAttributeValues };
