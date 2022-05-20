import type {
  PopularProductQueryOptions,
  Product,
  ProductQueryOptions,
} from '@/types';
import { NetworkStatus } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  usePopularProductsQuery,
  useProductQuery,
  useProductsQuery,
} from './gql/products.graphql';
import { getProducts } from './utils/products';

export function useProducts(options: Partial<ProductQueryOptions>) {
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useProductsQuery({
    variables: getProducts(options),
  });
  function handleLoadMore() {
    if (data?.products?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.products?.paginatorInfo?.currentPage + 1,
          first: 30,
        },
      });
    }
  }
  return {
    products: data?.products?.data ?? [],
    paginatorInfo: data?.products?.paginatorInfo,
    isLoading,
    error,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.products?.paginatorInfo?.hasMorePages),
  };
}

export const usePopularProducts = (
  options: Partial<PopularProductQueryOptions>
) => {
  const {
    data,
    loading: isLoading,
    error,
  } = usePopularProductsQuery({
    variables: options,
  });

  return {
    products: data?.popularProducts ?? [],
    isLoading,
    error,
  };
};

export function useProduct({ slug }: { slug: string }) {
  const {
    data,
    loading: isLoading,
    error,
  } = useProductQuery({
    variables: {
      slug,
    },
  });
  return {
    product: data?.product,
    isLoading,
    error,
  };
}
