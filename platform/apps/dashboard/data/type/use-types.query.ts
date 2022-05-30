import { QueryParamsType, TypesQueryOptionsType } from "apps/dashboard/ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "apps/dashboard/utils/data-mappers";
import { useQuery } from "react-query";
import Type from "apps/dashboard/repositories/type";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";
import { Type as TTYpe } from "apps/dashboard/ts-types/generated";

export type TypesPaginator = {
  data: Array<TTYpe>
  ;
  paginatorInfo: any;
};

const fetchTypes = async ({ queryKey, }: QueryParamsType): Promise<{ types: TypesPaginator }> => {
  const [_key, params] = queryKey;
  const {
    page,
    text,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as TypesQueryOptionsType;
  const searchString = stringifySearchQuery({
    name: text,
  });

  // @ts-ignore
  const queryParams = new URLSearchParams({
    searchJoin: "and",
    orderBy,
    sortedBy,
    limit: limit.toString(),
    ...(page && { page: page.toString() }),
    ...(Boolean(searchString) && { search: searchString }),
  });
  const url = `${API_ENDPOINTS.TYPES}?${queryParams.toString()}`;
  const { data: { data, ...rest }, } = await Type.all(url);
  return {
    types: {
      data,
      paginatorInfo: mapPaginatorData({...rest})
    }
  };
};

const useTypesQuery = (options: TypesQueryOptionsType) => {
  return useQuery<{types: TypesPaginator}, Error>(
    [API_ENDPOINTS.TYPES, options],
    fetchTypes,
    {
      keepPreviousData: true,
    }
  );
};

export { useTypesQuery, fetchTypes };
