import {
  QueryParamsType,
  ManufacturersQueryOptionsType,
} from "@ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Manufacturer from "@repositories/manufacturer";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { ManufacturerPaginator } from "@ts-types/generated";

const fetchManufacturers = async ({
  queryKey,
}: QueryParamsType): Promise<{ manufacturers: ManufacturerPaginator }> => {
  const [_key, params] = queryKey;

  const {
    page,
    text,
    is_approved,
    type,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as ManufacturersQueryOptionsType;

  const searchString = stringifySearchQuery({
    name: text,
    is_approved,
    type,
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
  const url = `${API_ENDPOINTS.MANUFACTURERS}?${queryParams.toString()}`;
  const {
    data: { data, ...rest },
  } = await Manufacturer.all(url);
  return {
    manufacturers: {
      data,
      paginatorInfo: mapPaginatorData({ ...rest }),
    },
  };
};

const useManufacturersQuery = (options: ManufacturersQueryOptionsType) => {
  return useQuery<{ manufacturers: ManufacturerPaginator }, Error>(
    [API_ENDPOINTS.MANUFACTURERS, options],
    fetchManufacturers,
    {
      keepPreviousData: true,
    }
  );
};

export { useManufacturersQuery, fetchManufacturers };
