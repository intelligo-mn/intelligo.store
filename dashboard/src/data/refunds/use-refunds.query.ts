import {
  QueryParamsType,
  WithdrawsQueryOptionsType,
} from "@ts-types/custom.types";
import { mapPaginatorData } from "@utils/data-mappers";
import { useQuery } from "react-query";
import Refunds from "@repositories/refunds";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { WithdrawPaginator } from "@ts-types/generated";

const fetchRefunds = async ({
  queryKey,
}: QueryParamsType): Promise<{ refunds: WithdrawPaginator }> => {
  const [_key, params] = queryKey;

  const {
    page,
    limit = 15,
    shop_id,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params as WithdrawsQueryOptionsType;

  const url = `${API_ENDPOINTS.REFUNDS}?shop_id=${shop_id}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;

  const {
    data: { data, ...rest },
  } = await Refunds.all(url);
  return {
    refunds: {
      data,
      paginatorInfo: mapPaginatorData({ ...rest }),
    },
  };
};

const useRefundsQuery = (
  params: WithdrawsQueryOptionsType,
  options: any = {}
) => {
  return useQuery<{ refunds: WithdrawPaginator }, Error>(
    [API_ENDPOINTS.REFUNDS, params],
    fetchRefunds,
    { ...options, keepPreviousData: true }
  );
};

export { useRefundsQuery, fetchRefunds };
