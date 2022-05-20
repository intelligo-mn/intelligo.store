import type {
  Author,
  AuthorPaginator,
  AuthorQueryOptions,
  QueryOptions,
} from '@/types';
import { NetworkStatus } from '@apollo/client';
import { useRouter } from 'next/router';
import { useAuthorsQuery, useTopAuthorsQuery } from './gql/authors.graphql';

export function useAuthors(options?: Partial<AuthorQueryOptions>) {
  const { query } = useRouter();

  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useAuthorsQuery({
    variables: {
      first: options?.limit,
      ...(query?.text && { text: `%${query?.text}%` }),
    },
    notifyOnNetworkStatusChange: true,
  });
  function handleLoadMore() {
    if (data?.authors?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.authors?.paginatorInfo?.currentPage + 1,
          // first: limit,
        },
      });
    }
  }
  return {
    authors: data?.authors?.data ?? [],
    paginatorInfo: data?.authors?.paginatorInfo,
    isLoading,
    error,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.authors?.paginatorInfo?.hasMorePages),
  };
}

export function useTopAuthors(options: Pick<QueryOptions, 'limit'>) {
  const {
    data,
    loading: isLoading,
    error,
  } = useTopAuthorsQuery({
    variables: options,
  });
  return {
    authors: data?.topAuthors ?? [],
    isLoading,
    error,
  };
}
