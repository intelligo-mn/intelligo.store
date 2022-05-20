import type { CategoryQueryOptions } from '@/types';
import { NetworkStatus } from '@apollo/client';
import { useCategoriesQuery } from './gql/categories.graphql';
import { getCategories } from './utils/categories';

export function useCategories(options: CategoryQueryOptions) {
  const {
    data,
    loading: isLoading,
    error,
    networkStatus,
    fetchMore,
  } = useCategoriesQuery({
    variables: getCategories(options),
    notifyOnNetworkStatusChange: true,
  });
  function handleLoadMore() {
    if (data?.categories?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.categories?.paginatorInfo?.currentPage + 1,
          first: 5,
        },
      });
    }
  }
  return {
    categories: data?.categories?.data ?? [],
    paginatorInfo: data?.categories?.paginatorInfo,
    isLoading,
    error,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.categories?.paginatorInfo?.hasMorePages),
  };
}
