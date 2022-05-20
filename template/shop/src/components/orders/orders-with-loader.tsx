import Button from '@/components/ui/button';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import NotFound from '@/components/ui/not-found';
import Scrollbar from '@/components/ui/scrollbar';
import { useTranslation } from 'next-i18next';
import OrderDetails from './order-details';

interface OrdersWithLoaderProps {
  showLoaders: boolean;
  hasNextPage: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
  notFound: boolean;
  order: any;
}

const OrdersWithLoader: React.FC<OrdersWithLoaderProps> = ({
  showLoaders,
  hasNextPage,
  isLoadingMore,
  onLoadMore,
  notFound,
  children,
  order,
}) => {
  const { t } = useTranslation('common');
  return (
    <div className="hidden w-full overflow-hidden lg:flex">
      {/* Order List */}
      <div
        className="w-full ltr:pr-5 rtl:pl-5 md:w-1/3 ltr:lg:pr-8 rtl:lg:pl-8"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <div className="flex h-full flex-col bg-white pb-5 md:border md:border-border-200">
          <h3 className="py-5 px-5 text-xl font-semibold text-heading">
            {t('profile-sidebar-orders')}
          </h3>
          <Scrollbar className="w-full" style={{ height: 'calc(100% - 80px)' }}>
            {showLoaders ? (
              <p>
                <Spinner showText={false} />
              </p>
            ) : (
              <div className="px-5">
                {children}
                {hasNextPage && (
                  <div className="mt-8 flex justify-center lg:mt-12">
                    <Button
                      loading={isLoadingMore}
                      onClick={onLoadMore}
                      className="h-11 text-sm font-semibold md:text-base"
                    >
                      {t('text-load-more')}
                    </Button>
                  </div>
                )}
              </div>
            )}
            {notFound && (
              <div className="my-auto flex h-full w-full items-center justify-center">
                <h4 className="text-center text-sm font-semibold text-body">
                  {t('error-no-orders')}
                </h4>
              </div>
            )}
          </Scrollbar>
        </div>
      </div>
      {/* End of Order List */}
      {Boolean(order) ? (
        <OrderDetails order={order} />
      ) : (
        <div className="mx-auto max-w-lg bg-white">
          <NotFound text="text-no-order-found" />
        </div>
      )}
    </div>
  );
};

export default OrdersWithLoader;
