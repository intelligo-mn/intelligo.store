import {
  QueryParamsType,
  StaffsQueryOptionsType,
} from "@ts-types/custom.types";
import { mapPaginatorData, stringifySearchQuery } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Shop from "@repositories/shop";
import { API_ENDPOINTS } from "@utils/api/endpoints";

const fetchStaffs = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    shop_id,
    orderBy = "updated_at",
    sortedBy = "DESC",
    limit = 15,
    page = 1,
  } = params as StaffsQueryOptionsType;
  const url = `${API_ENDPOINTS.STAFFS}?shop_id=${shop_id}&orderBy=${orderBy}&sortedBy=${sortedBy}&page=${page}&limit=${limit}`;
  const {
    data: { data, ...rest },
  } = await Shop.staffs(url);
  return { staffs: { data, paginatorInfo: mapPaginatorData({ ...rest }) } };
};

const useStaffsQuery = (
  params: StaffsQueryOptionsType = {},
  options: any = {}
) => {
  return useQuery<any, Error>([API_ENDPOINTS.STAFFS, params], fetchStaffs, {
    ...options,
    keepPreviousData: true,
  });
};

export { useStaffsQuery, fetchStaffs };
