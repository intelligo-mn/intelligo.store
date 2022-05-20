import {
  DownloadableFilePaginator,
  Order,
  OrderPaginator,
  OrderQueryOptions,
  OrderStatusPaginator,
  QueryOptions,
} from '@/types';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { API_ENDPOINTS } from './client/api-endpoints';
import client from './client';
import { useAtom } from 'jotai';
import { verifiedResponseAtom } from '@/store/checkout';
import { useRouter } from 'next/router';
import { ROUTES } from '@/lib/routes';
import { mapPaginatorData } from '@/framework/utils/data-mappers';

export function useOrders(options?: Partial<OrderQueryOptions>) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<OrderPaginator, Error>(
    [API_ENDPOINTS.ORDERS, options],
    ({ queryKey, pageParam }) =>
      client.orders.all(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page, last_page }) =>
        last_page > current_page && { page: current_page + 1 },
    }
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    orders: data?.pages.flatMap((page) => page.data) ?? [],
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

export function useOrder({ tracking_number }: { tracking_number: string }) {
  const { data, isLoading, error } = useQuery<Order, Error>(
    [API_ENDPOINTS.ORDERS, tracking_number],
    () => client.orders.get(tracking_number)
  );

  return {
    order: data,
    isLoading,
    error,
  };
}

export function useOrderStatuses(options: Pick<QueryOptions, 'limit'>) {
  const {
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery<OrderStatusPaginator, Error>(
    [API_ENDPOINTS.ORDERS_STATUS, options],
    ({ queryKey, pageParam }) =>
      client.orders.statuses(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page, last_page }) =>
        last_page > current_page && { page: current_page + 1 },
    }
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    orderStatuses: data?.pages.flatMap((page) => page.data) ?? [],
    paginatorInfo: Array.isArray(data?.pages)
      ? mapPaginatorData(data?.pages[data.pages.length - 1])
      : null,
    isLoading: isFetching,
    isLoadingMore: isFetchingNextPage,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
}

export function useRefunds(options: Pick<QueryOptions, 'limit'>) {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery(
    [API_ENDPOINTS.ORDERS_REFUNDS, options],
    ({ queryKey, pageParam }) =>
      client.orders.refunds(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page }) => ({ page: current_page + 1 }),
    }
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    refunds: data?.pages.flatMap((page) => page.data) ?? [],
    paginatorInfo: Array.isArray(data?.pages)
      ? mapPaginatorData(data?.pages[data.pages.length - 1])
      : null,
    isLoading,
    isLoadingMore: isFetchingNextPage,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
}

export const useDownloadableProducts = (
  options: Pick<QueryOptions, 'limit'>
) => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery<DownloadableFilePaginator, Error>(
    [API_ENDPOINTS.ORDERS_DOWNLOADS, options],
    ({ queryKey, pageParam }) =>
      client.orders.downloadable(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page, last_page }) =>
        last_page > current_page && { page: current_page + 1 },
    }
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    downloads: data?.pages.flatMap((page) => page.data) ?? [],
    paginatorInfo: Array.isArray(data?.pages)
      ? mapPaginatorData(data?.pages[data.pages.length - 1])
      : null,
    isLoading,
    isLoadingMore: isFetchingNextPage,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
};

export function useCreateRefund() {
  const { t } = useTranslation();
  const { closeModal } = useModalAction();
  const queryClient = useQueryClient();
  const { mutate: createRefundRequest, isLoading } = useMutation(
    client.orders.createRefund,
    {
      onSuccess: () => {
        toast.success(t('text-refund-request-submitted'));
      },
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ORDERS);
        closeModal();
      },
    }
  );
  return {
    createRefundRequest,
    isLoading,
  };
}

export function useCreateOrder() {
  const router = useRouter();

  const { mutate: createOrder, isLoading } = useMutation(client.orders.create, {
    onSuccess: (data) => {
      if (data?.tracking_number) {
        router.push(`${ROUTES.ORDERS}/${data?.tracking_number}`);
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};
      toast.error(data?.message);
    },
  });

  return {
    createOrder,
    isLoading,
  };
}

export function useGenerateDownloadableUrl() {
  const { mutate: getDownloadableUrl } = useMutation(
    client.orders.generateDownloadLink,
    {
      onSuccess: (data) => {
        function download(fileUrl: string, fileName: string) {
          var a = document.createElement('a');
          a.href = fileUrl;
          a.setAttribute('download', fileName);
          a.click();
        }

        download(data, 'record.name');
      },
    }
  );

  function generateDownloadableUrl(digital_file_id: string) {
    getDownloadableUrl({
      digital_file_id,
    });
  }

  return {
    generateDownloadableUrl,
  };
}

export function useVerifyOrder() {
  const [_, setVerifiedResponse] = useAtom(verifiedResponseAtom);

  return useMutation(client.orders.verify, {
    onSuccess: (data) => {
      if (data) {
        //@ts-ignore
        setVerifiedResponse(data);
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      toast.error(data?.message);
    },
  });
}
