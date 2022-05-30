import { QueryParamsType, QueryOptionsType } from "apps/dashboard/ts-types/custom.types";
import { stringifySearchQuery } from "apps/dashboard/utils/data-mappers";
import { useQuery } from "react-query";
import Tax from "apps/dashboard/repositories/tax";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

const fetchTaxes = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    text,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as QueryOptionsType;
  const searchString = stringifySearchQuery({
    name: text,
  });
  const url = `${API_ENDPOINTS.TAXES}?search=${searchString}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const { data } = await Tax.all(url);
  return { taxes: data };
};

const useTaxesQuery = (options: QueryOptionsType = {}) => {
  return useQuery<any, Error>([API_ENDPOINTS.TAXES, options], fetchTaxes, {
    keepPreviousData: true,
  });
};

export { useTaxesQuery, fetchTaxes };
