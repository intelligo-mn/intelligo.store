import { Image } from '@/components/ui/image';
import { useWindowSize } from '@/lib/use-window-size';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import ShopSidebar from '@/components/shops/sidebar';
import { productPlaceholder } from '@/lib/placeholders';
import ProductsGrid from '@/components/products/grid';
import { getLayout } from '@/components/layouts/layout';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { NextPageWithLayout } from '@/types';
import { InferGetStaticPropsType } from 'next';
import { getStaticPaths, getStaticProps } from '@/framework/shop.ssr';
export { getStaticPaths, getStaticProps };

const CartCounterButton = dynamic(
  () => import('@/components/cart/cart-counter-button'),
  { ssr: false }
);

const ShopPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ shop, variables }) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const { t } = useTranslation('banner');

  const isBook = router.asPath.includes('/book');

  return (
    <div className="flex flex-col bg-gray-100 lg:flex-row lg:items-start lg:p-8">
      <ShopSidebar shop={shop} className="sticky top-24 lg:top-28" />

      <div className="flex w-full flex-col p-4 lg:p-0 ltr:lg:pl-8 rtl:lg:pr-8">
        <div className="relative h-full w-full overflow-hidden rounded">
          <Image
            alt={t('heading')}
            src={shop?.cover_image?.original! ?? productPlaceholder}
            layout="responsive"
            width={2340}
            height={870}
            className="h-full w-full"
          />
        </div>
        {/* {shop && ( */}
        <ProductsGrid
          className="py-8"
          gridClassName={classNames(
            'grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3',
            {
              'gap-6 md:gap-8': isBook,
            }
          )}
          variables={variables}
        />
        {/* )} */}
      </div>
      {width > 1023 && <CartCounterButton />}
    </div>
  );
};

ShopPage.getLayout = getLayout;
export default ShopPage;
