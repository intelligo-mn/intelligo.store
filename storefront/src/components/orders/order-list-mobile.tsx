import Button from '@/components/ui/button';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useTranslation } from 'next-i18next';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import { Image } from '@/components/ui/image';
import noResult from '@/assets/no-result.svg';

interface OrdersWithLoaderProps {
  showLoaders: boolean;
  hasNextPage: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
  notFound: boolean;
  order: any;
}

const OrderListMobile: React.FC<OrdersWithLoaderProps> = ({
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
    <div className="flex flex-col w-full lg:hidden">
      <div className="flex flex-col w-full h-full px-0 pb-5">
        <h3 className="text-xl font-semibold pb-5 text-heading">
          {t('profile-sidebar-orders')}
        </h3>
        {Boolean(order) && (
          <Collapse
            accordion={true}
            defaultActiveKey="active"
            expandIcon={() => null}
          >
            {showLoaders ? (
              <p>
                <Spinner showText={false} />
              </p>
            ) : (
              children
            )}

            {hasNextPage && (
              <div className="flex justify-center mt-8">
                <Button
                  loading={isLoadingMore}
                  onClick={onLoadMore}
                  className="text-sm md:text-base font-semibold h-11"
                >
                  {t('text-load-more')}
                </Button>
              </div>
            )}
          </Collapse>
        )}

        {notFound && (
          <div className="w-full h-full flex flex-col items-center justify-center py-10 my-auto">
            <div className="w-5/6 h-full flex items-center justify-center mb-7">
              <Image
                src={noResult}
                className="w-full h-full object-contain"
                alt="No Order Found"
              />
            </div>
            <h4 className="text-sm font-semibold text-body text-center">
              {t('error-no-orders')}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderListMobile;
