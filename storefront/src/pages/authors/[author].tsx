import { getLayout as getSiteLayout } from '@/components/layouts/layout';
import Details from '@/components/author/details/details';
import { useWindowSize } from '@/lib/use-window-size';
import dynamic from 'next/dynamic';
import ProductsGrid from '@/components/products/grid';
import { useTranslation } from 'react-i18next';
export { getStaticPaths, getStaticProps } from '@/framework/author.ssr';

const CartCounterButton = dynamic(
  () => import('@/components/cart/cart-counter-button'),
  { ssr: false }
);

export default function Author({ author, variables }: any) {
  const { t } = useTranslation('common');
  const { width } = useWindowSize();
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl">
        <Details author={author} />
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-heading lg:text-3xl">
          {t('text-author-books')}
        </h2>
        {/* //FIXME:  */}
        <ProductsGrid
          gridClassName="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 md:gap-8"
          variables={variables}
        />
      </div>
      {width > 1023 && <CartCounterButton />}
    </>
  );
}

const getLayout = (page: React.ReactElement) =>
  getSiteLayout(
    <div className="w-full bg-light">
      <div className="mx-auto min-h-screen w-full max-w-1920 px-5 py-10 xl:py-14 xl:px-16">
        {page}
      </div>
    </div>
  );
Author.getLayout = getLayout;
