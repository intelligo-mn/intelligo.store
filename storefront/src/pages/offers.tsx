import type { NextPageWithLayout } from '@/types';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import Button from '@/components/ui/button';
import CartCounterButton from '@/components/cart/cart-counter-button';
import NotFound from '@/components/ui/not-found';
import { useTranslation } from 'next-i18next';
import rangeMap from '@/lib/range-map';
import CouponLoader from '@/components/ui/loaders/coupon-loader';
import { useCoupons } from '@/framework/coupon';
import ErrorMessage from '@/components/ui/error-message';
import CouponCard from '@/components/ui/cards/coupon';
export { getStaticProps } from '@/framework/coupon.ssr';

const OffersPage: NextPageWithLayout = () => {
  const limit = 20;
  const { t } = useTranslation('common');
  const { isLoading, isLoadingMore, hasMore, coupons, error, loadMore } =
    useCoupons();
  if (error) return <ErrorMessage message={error.message} />;
  if (!isLoading && !coupons.length) {
    return (
      <div className="min-h-full px-4 pt-6 pb-8 bg-gray-100 lg:p-8">
        <NotFound text="text-no-coupon" />
      </div>
    );
  }

  return (
    <>
      <Seo title="Offers" url="offers" />
      <div className="w-full px-4 py-8 mx-auto bg-gray-100 max-w-1920 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 xl:gap-8">
          {isLoading && !coupons.length
            ? rangeMap(limit, (i) => (
                <CouponLoader key={i} uniqueKey={`coupon-${i}`} />
              ))
            : coupons.map((item) => <CouponCard key={item.id} coupon={item} />)}
        </div>
        {hasMore && (
          <div className="flex items-center justify-center mt-8 lg:mt-12">
            <Button onClick={loadMore} loading={isLoadingMore}>
              {t('text-load-more')}
            </Button>
          </div>
        )}
      </div>
      <CartCounterButton />
    </>
  );
};

OffersPage.getLayout = getLayout;

export default OffersPage;
