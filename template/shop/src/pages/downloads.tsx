import Card from '@/components/ui/cards/card';
import { useTranslation } from 'next-i18next';
import DownloadableProducts from '@/components/products/downloadable-products';
import Seo from '@/components/seo/seo';
import DashboardLayout from '@/layouts/_dashboard';

export { getStaticProps } from '@/framework/general.ssr';

const DownloadableProductsPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Card className="w-full shadow-none sm:shadow">
        <h1 className="mb-8 text-center text-lg font-semibold text-heading sm:mb-10 sm:text-xl">
          {t('text-downloads')}
        </h1>
        <DownloadableProducts />
      </Card>
    </>
  );
};

DownloadableProductsPage.authenticationRequired = true;

DownloadableProductsPage.getLayout = function getLayout(
  page: React.ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DownloadableProductsPage;
