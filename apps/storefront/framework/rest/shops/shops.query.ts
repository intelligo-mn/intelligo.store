import { QueryParamsType, ShopsQueryOptionsType, Shop } from 'apps/storefront/framework/rest/types';
import { CoreApi, ParamsType } from 'apps/storefront/framework/rest/utils/core-api';
import { mapPaginatorData } from 'apps/storefront/framework/rest/utils/data-mappers';
import { API_ENDPOINTS } from 'apps/storefront/framework/rest/utils/endpoints';
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
