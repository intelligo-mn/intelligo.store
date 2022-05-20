import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { getLayout as getSiteLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { useUser } from '@/framework/user';
import ContactGrid from '@/components/checkout/contact/contact-grid';
export { getStaticProps } from '@/framework/general.ssr';

const CheckoutCart = dynamic(
  () => import('@/components/checkout/digital/checkout-cart'),
  { ssr: false }
);

const CheckoutDigitalPage = () => {
  const { t } = useTranslation('common');
  const { me } = useUser();

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="m-auto flex w-full max-w-xl flex-col">
          <ContactGrid
            className="bg-light p-5 shadow-700 md:p-8"
            contact={me?.profile?.contact}
            label={t('text-contact-number')}
          />
          <div className="mt-3 w-full bg-white">
            <span className="mb-[1px] block w-full border-b border-gray-100 py-7 px-8 text-lg font-semibold capitalize text-gray-800 lg:text-2xl">
              {t('text-your-order')}
            </span>
            <div className="w-full px-8 py-7">
              <CheckoutCart hideTitle={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const getLayout = (page: React.ReactElement) =>
  getSiteLayout(<div className="min-h-screen bg-gray-100">{page}</div>);

CheckoutDigitalPage.authenticationRequired = true;

CheckoutDigitalPage.getLayout = getLayout;
export default CheckoutDigitalPage;
