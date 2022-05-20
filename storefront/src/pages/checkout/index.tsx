import { useTranslation } from 'next-i18next';
import { billingAddressAtom, shippingAddressAtom } from '@/store/checkout';
import dynamic from 'next/dynamic';
import { getLayout } from '@/components/layouts/layout';
import { AddressType } from '@/framework/utils/constants';
import Seo from '@/components/seo/seo';
import { useUser } from '@/framework/user';
export { getStaticProps } from '@/framework/general.ssr';

const ScheduleGrid = dynamic(
  () => import('@/components/checkout/schedule/schedule-grid')
);
const AddressGrid = dynamic(
  () => import('@/components/checkout/address-grid'),
  { ssr: false }
);
const ContactGrid = dynamic(
  () => import('@/components/checkout/contact/contact-grid')
);
const RightSideView = dynamic(
  () => import('@/components/checkout/right-side-view'),
  { ssr: false }
);

export default function CheckoutPage() {
  const { t } = useTranslation();
  const { me } = useUser();
  const { id, address, profile } = me ?? {};
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="px-4 py-8 bg-gray-100 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="flex flex-col items-center w-full max-w-5xl m-auto rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
          <div className="w-full space-y-6 lg:max-w-2xl">
            <ContactGrid
              className="p-5 bg-light shadow-700 md:p-8"
              contact={profile?.contact}
              label={t('text-contact-number')}
              count={1}
            />

            <AddressGrid
              userId={id!}
              className="p-5 bg-light shadow-700 md:p-8"
              label={t('text-billing-address')}
              count={2}
              //@ts-ignore
              addresses={address?.filter(
                (item) => item?.type === AddressType.Billing
              )}
              atom={billingAddressAtom}
              type={AddressType.Billing}
            />
            <AddressGrid
              userId={me?.id!}
              className="p-5 bg-light shadow-700 md:p-8"
              label={t('text-shipping-address')}
              count={3}
              //@ts-ignore
              addresses={address?.filter(
                (item) => item?.type === AddressType.Shipping
              )}
              atom={shippingAddressAtom}
              type={AddressType.Shipping}
            />
            <ScheduleGrid
              className="p-5 bg-light shadow-700 md:p-8"
              label={t('text-delivery-schedule')}
              count={4}
            />
          </div>
          <div className="w-full mt-10 mb-10 sm:mb-12 lg:mb-0 lg:w-96">
            <RightSideView />
          </div>
        </div>
      </div>
    </>
  );
}
CheckoutPage.authenticationRequired = true;
CheckoutPage.getLayout = getLayout;
