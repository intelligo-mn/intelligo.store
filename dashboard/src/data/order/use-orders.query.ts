import { QueryParamsType, QueryOptionsType } from "@ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Orders from "@repositories/type";
import { API_ENDPOINTS } from "@utils/api/endpoints";

const fetchOrders = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    text,
    shop_id,
    page = 1,
    limit = 20,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as QueryOptionsType;
  const searchString = stringifySearchQuery({
    tracking_number: text,
  });
  const url = `${API_ENDPOINTS.ORDERS}?search=${searchString}&shop_id=${shop_id}&page=${page}&limit=${limit}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await Orders.all(url);
  return { orders: { data, paginatorInfo: mapPaginatorData({ ...rest }) } };
};

const useOrdersQuery = (params: QueryOptionsType = {}, options: any = {}) => {
  return useQuery<any, Error>([API_ENDPOINTS.ORDERS, params], fetchOrders, {
    ...options,
    keepPreviousData: true,
  });
};

export { useOrdersQuery, fetchOrders };
