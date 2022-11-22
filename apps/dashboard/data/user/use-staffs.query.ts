import { QueryParamsType, QueryOptionsType } from "@ts-types/custom.types";
import { mapPaginatorData } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Shop from "@repositories/shop";
import { API_ENDPOINTS } from "@utils/api/endpoints";

const fetchStaffs = async ({ queryKey }: QueryParamsType) => {
  const [_key, params] = queryKey;
  const {
    shop_id,
    page,
    text,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as QueryOptionsType;
  const url = `${API_ENDPOINTS.STAFFS}?search=${text}&shop_id=${shop_id}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await Shop.staffs(url);
  return { staffs: { data, paginatorInfo: mapPaginatorData({ ...rest }) } };
};

const useStaffsQuery = (options: QueryOptionsType) => {
  return useQuery<any, Error>([API_ENDPOINTS.STAFFS, options], fetchStaffs, {
    keepPreviousData: true,
  });
};

export { useStaffsQuery, fetchStaffs };
