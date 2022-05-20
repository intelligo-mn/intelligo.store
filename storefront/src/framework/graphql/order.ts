import type {
  CheckoutVerificationInput,
  CreateOrderInput,
} from '__generated__/__types__';
import type { OrderQueryOptions, QueryOptions } from '@/types';
import {
  QueryOrderStatusesOrderByColumn,
  SortOrder,
} from '__generated__/__types__';

import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useModalAction } from '@/components/ui/modal/modal.context';
import {
  useCreateOrderMutation,
  useOrderQuery,
  useOrdersQuery,
  useOrderStatusesQuery,
  useVerifyCheckoutMutation,
} from './gql/orders.graphql';
import { NetworkStatus } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  useCreateRefundMutation,
  useRefundsQuery,
} from './gql/refunds.graphql';
import {
  useDownloadableProductsQuery,
  useGenerateDownloadableUrlMutation,
} from './gql/products.graphql';
import { useAtom } from 'jotai';
import { verifiedResponseAtom } from '@/store/checkout';
import { ROUTES } from '@/lib/routes';

export function useOrders(options?: Partial<OrderQueryOptions>) {
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useOrdersQuery({
    variables: {
      first: 10,
    },
    notifyOnNetworkStatusChange: true,
  });

  function handleLoadMore() {
    if (data?.orders?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.orders?.paginatorInfo?.currentPage + 1,
        },
      });
    }
  }
  return {
    orders: data?.orders?.data ?? [],
    paginatorInfo: data?.orders?.paginatorInfo,
    isLoading,
    error,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.orders?.paginatorInfo?.hasMorePages),
  };
}

export function useOrder({ tracking_number }: { tracking_number: string }) {
  const {
    data,
    loading: isLoading,
    error,
  } = useOrderQuery({
    variables: {
      tracking_number,
    },
  });

  return {
    order: data?.order,
    isLoading,
    error,
  };
}

export function useOrderStatuses(options: Pick<QueryOptions, 'limit'>) {
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useOrderStatusesQuery({
    variables: {
      first: 100,
      page: 1,
      orderBy: [
        {
          column: QueryOrderStatusesOrderByColumn.Serial,
          order: SortOrder.Asc,
        },
      ],
    },
    notifyOnNetworkStatusChange: true,
  });

  function handleLoadMore() {
    if (data?.orderStatuses?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.orderStatuses?.paginatorInfo?.currentPage + 1,
        },
      });
    }
  }

  return {
    orderStatuses: data?.orderStatuses?.data ?? [],
    paginatorInfo: data?.orderStatuses?.paginatorInfo,
    isLoading,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.orderStatuses?.paginatorInfo?.hasMorePages),
  };
}

export function useRefunds(options: Pick<QueryOptions, 'limit'>) {
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useRefundsQuery({
    variables: {
      orderBy: 'created_at',
      sortedBy: 'desc',
    },
    notifyOnNetworkStatusChange: true,
  });

  function handleLoadMore() {
    if (data?.refunds?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.refunds?.paginatorInfo?.currentPage + 1,
        },
      });
    }
  }
  return {
    refunds: data?.refunds?.data ?? [],
    paginatorInfo: data?.refunds?.paginatorInfo,
    isLoading,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.refunds?.paginatorInfo?.hasMorePages),
  };
}

export const useDownloadableProducts = (
  options: Pick<QueryOptions, 'limit'>
) => {
  const {
    data,
    loading: isLoading,
    error,
    fetchMore,
    networkStatus,
  } = useDownloadableProductsQuery({
    variables: {
      first: options.limit,
    },
    notifyOnNetworkStatusChange: true,
  });
  function handleLoadMore() {
    if (data?.downloads?.paginatorInfo.hasMorePages) {
      fetchMore({
        variables: {
          page: data?.downloads?.paginatorInfo?.currentPage + 1,
          first: 5,
        },
      });
    }
  }
  return {
    downloads: data?.downloads?.data ?? [],
    paginatorInfo: data?.downloads?.paginatorInfo,
    isLoading,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    error,
    loadMore: handleLoadMore,
    hasMore: Boolean(data?.downloads?.paginatorInfo?.hasMorePages),
  };
};

export function useCreateRefund() {
  const { t } = useTranslation();
  const { closeModal } = useModalAction();
  const [refundRequest, { loading: isLoading }] = useCreateRefundMutation({
    refetchQueries: ['Orders'],
    onCompleted: () => {
      toast.success(t('text-refund-request-submitted'));
      closeModal();
    },
  });

  function createRefundRequest(input: any) {
    refundRequest({
      variables: {
        input,
      },
    });
  }

  return {
    createRefundRequest,
    isLoading,
  };
}
export function useCreateOrder() {
  const router = useRouter();
  const [createOrder, { loading: isLoading }] = useCreateOrderMutation({
    onCompleted: (data) => {
      if (data?.createOrder?.tracking_number) {
        router.push(`${ROUTES.ORDERS}/${data?.createOrder?.tracking_number}`);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  function create(input: CreateOrderInput) {
    createOrder({
      variables: {
        input,
      },
    });
  }
  return {
    createOrder: create,
    isLoading,
  };
}

export function useGenerateDownloadableUrl() {
  const [getDownloadableUrl] = useGenerateDownloadableUrlMutation({
    onCompleted: (data) => {
      function download(fileUrl: string, fileName: string) {
        var a = document.createElement('a');
        a.href = fileUrl;
        a.setAttribute('download', fileName);
        a.click();
      }
      download(data?.generateDownloadableUrl!, 'record.name');
    },
  });
  function generateDownloadableUrl(digital_file_id: string) {
    getDownloadableUrl({
      variables: {
        input: {
          digital_file_id,
        },
      },
    });
  }

  return {
    generateDownloadableUrl,
  };
}
export function useVerifyOrder() {
  const [_, setVerifiedResponse] = useAtom(verifiedResponseAtom);

  const [mutate, { loading: isLoading, error }] = useVerifyCheckoutMutation({
    onCompleted: (data) => {
      if (data?.verifyCheckout) {
        //@ts-ignore
        setVerifiedResponse(data.verifyCheckout);
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  function verifyOrder(values: CheckoutVerificationInput) {
    mutate({
      variables: {
        input: values,
      },
    });
  }
  return {
    mutate: verifyOrder,
    isLoading,
    error,
  };
}
