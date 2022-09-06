import { QueryParamsType, QueryOptionsType } from "apps/dashboard/ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "apps/dashboard/utils/data-mappers";
import { useQuery } from "react-query";
import OrderStatus from "apps/dashboard/repositories/order-status";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

const fetchOrderStatuses = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    page,
    text,
    limit = 15,
    orderBy = "serial",
    sortedBy = "ASC",
  } = params as QueryOptionsType;
  const searchString = stringifySearchQuery({
    name: text,
  });
  const url = `${API_ENDPOINTS.ORDER_STATUS}?search=${searchString}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await OrderStatus.all(url);
  return {
    order_statuses: { data, paginatorInfo: mapPaginatorData({ ...rest }) },
  };
};

const useOrderStatusesQuery = (options: QueryOptionsType) => {
  return useQuery<any, Error>(
    [API_ENDPOINTS.ORDER_STATUS, options],
    fetchOrderStatuses,
    {
      keepPreviousData: true,
    }
  );
};

export { useOrderStatusesQuery, fetchOrderStatuses };
