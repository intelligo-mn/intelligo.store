import { QueryParamsType, ShopsQueryOptionsType, Shop } from '@framework/types';
import { CoreApi, ParamsType } from '@framework/utils/core-api';
import { mapPaginatorData } from '@framework/utils/data-mappers';
import { API_ENDPOINTS } from '@framework/utils/endpoints';
import {
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
} from 'react-query';

const ShopService = new CoreApi(API_ENDPOINTS.SHOPS);
type PaginatedShop = {
  data: Shop[];
  paginatorInfo: any;
};

const fetchShops = async ({ queryKey, pageParam }: QueryParamsType): Promise<PaginatedShop> => {
  const params = queryKey[1];
  let fetchedData: any = {};
  if (pageParam) {
    const response = await ShopService.fetchUrl(pageParam);
    fetchedData = response.data;
  } else {
    const response = await ShopService.find(params as ParamsType);
    fetchedData = response.data;
  }
  const { data, ...rest } = fetchedData;
  return { data, paginatorInfo: mapPaginatorData({ ...rest }) };
};

const useShopsQuery = (
  params: ShopsQueryOptionsType = {},
  options?: UseInfiniteQueryOptions<PaginatedShop,
    Error,
    PaginatedShop,
    PaginatedShop,
    QueryKey>
) => {
  return useInfiniteQuery<PaginatedShop, Error>(
    [API_ENDPOINTS.SHOPS, params],
    fetchShops,
    {
      ...options,
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export { useShopsQuery, fetchShops };

export const fetchShop = async (slug: string) => {
  const { data } = await ShopService.findOne(slug);
  return data;
};

export const useShopQuery = (slug: string) => {
  return useQuery<Shop, Error>([API_ENDPOINTS.SHOPS, slug], () =>
    fetchShop(slug)
  );
};
