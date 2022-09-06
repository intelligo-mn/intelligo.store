import { QueryParamsType, QueryOptionsType } from "apps/dashboard/ts-types/custom.types";
import { stringifySearchQuery } from "apps/dashboard/utils/data-mappers";
import { useQuery } from "react-query";
import AttributeValue from "apps/dashboard/repositories/attribute-value";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

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
