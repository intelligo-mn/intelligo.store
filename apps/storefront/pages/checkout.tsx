import { useTranslation } from "next-i18next";
import { billingAddressAtom, shippingAddressAtom } from "apps/storefront/store/checkout";
import dynamic from "next/dynamic";
import useUser from "apps/storefront/framework/rest/auth/use-user";
import { AddressType } from "apps/storefront/framework/rest/utils/constants";
import { getLayout } from "apps/storefront/components/layout/layout";
import { Address } from "apps/storefront/framework/rest/types";
import Divider from "apps/storefront/components/ui/divider";
import Container from "apps/storefront/components/ui/container";
import Subscription from "apps/storefront/components/common/subscription";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/common";

const ScheduleGrid = dynamic(
  () => import("apps/storefront/components/checkout/schedule/schedule-grid")
);
const AddressGrid = dynamic(() => import("apps/storefront/components/checkout/address-grid"));
const ContactGrid = dynamic(
  () => import("apps/storefront/components/checkout/contact/contact-grid")
);
const RightSideView = dynamic(
  () => import("apps/storefront/components/checkout/right-side-view")
);

export default function CheckoutPage() {
  const { me } = useUser();
  const { t } = useTranslation();

  return (
    <>
      <Divider className="mb-0" />
      <Container>
        <div className="py-8 lg:py-10 xl:py-14 max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start m-auto lg:space-x-7 xl:space-x-12 rtl:space-x-reverse w-full">
            <div className="w-full space-y-6">
              <ContactGrid
                className="shadow-checkoutCard border border-gray-100 rounded-md p-5 md:p-7 bg-white"
                //@ts-ignore
                userId={me?.id!}
                profileId={me?.profile?.id!}
                contact={me?.profile?.contact!}
                label={t("text-contact-number")}
                count={1}
              />

              <AddressGrid
                userId={me?.id!}
                className="shadow-checkoutCard border border-gray-100 rounded-md p-5 md:p-7 bg-white"
                label={t("text-billing-address")}
                count={2}
                //@ts-ignore
                addresses={me?.address?.filter(
                  (address: Address) => address?.type === AddressType.Billing
                )}
                atom={billingAddressAtom}
                type={AddressType.Billing}
              />
              <AddressGrid
                userId={me?.id!}
                className="shadow-checkoutCard border border-gray-100 rounded-md p-5 md:p-7 bg-white"
                label={t("text-shipping-address")}
                count={3}
                //@ts-ignore
                addresses={me?.address?.filter(
                  (address: Address) => address?.type === AddressType.Shipping
                )}
                atom={shippingAddressAtom}
                type={AddressType.Shipping}
              />
              <ScheduleGrid
                className="shadow-checkoutCard border border-gray-100 rounded-md p-5 md:p-7 bg-white"
                label={t("text-delivery-schedule")}
                count={4}
              />
            </div>
            <div className="w-full lg:w-[320px] xl:w-[440px] flex-shrink-0 mt-10 sm:mt-12 lg:mt-0">
              <RightSideView />
            </div>
          </div>
        </div>
        <Subscription />
      </Container>
    </>
  );
}

CheckoutPage.authenticate = true;
CheckoutPage.getLayout = getLayout;
