import { QueryParamsType, QueryOptionsType } from "@ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Coupon from "@repositories/coupon";
import { API_ENDPOINTS } from "@utils/api/endpoints";

const fetchCoupons = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    page,
    text,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as QueryOptionsType;
  const searchString = stringifySearchQuery({
    code: text,
  });
  const url = `${API_ENDPOINTS.COUPONS}?search=${searchString}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await Coupon.all(url);
  return { coupons: { data, paginatorInfo: mapPaginatorData({ ...rest }) } };
};

const useCouponsQuery = (options: QueryOptionsType) => {
  return useQuery<any, Error>([API_ENDPOINTS.COUPONS, options], fetchCoupons, {
    keepPreviousData: true,
  });
};

export { useCouponsQuery, fetchCoupons };
