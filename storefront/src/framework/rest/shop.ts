import type { ShopPaginator, ShopQueryOptions } from '@/types';
import { useInfiniteQuery } from 'react-query';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';
import { mapPaginatorData } from '@/framework/utils/data-mappers';

export function useShops(options?: Partial<ShopQueryOptions>) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<ShopPaginator, Error>(
    [API_ENDPOINTS.SHOPS, options],
    ({ queryKey, pageParam }) =>
      client.shops.all(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page }) => ({ page: current_page + 1 }),
    }
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    shops: data?.pages.flatMap((page) => page.data) ?? [],
    paginatorInfo: Array.isArray(data?.pages)
      ? mapPaginatorData(data?.pages[data.pages.length - 1])
      : null,
    isLoading,
    error,
    isFetching,
    isLoadingMore: isFetchingNextPage,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
}
