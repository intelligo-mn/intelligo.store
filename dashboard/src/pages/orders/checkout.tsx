import { useTranslation } from "next-i18next";
import {
  billingAddressAtom,
  customerAtom,
  shippingAddressAtom,
} from "@contexts/checkout";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Layout from "@components/layouts/admin";
import { adminOnly } from "@utils/auth-utils";
import CustomerGrid from "@components/checkout/customer/customer-grid";
import { useEffect } from "react";
import { useAtom } from "jotai";
import Loader from "@components/ui/loader/loader";
import { useUserQuery } from "@data/user/use-user-query";
import { AddressType } from "@ts-types/generated";

const ScheduleGrid = dynamic(
  () => import("@components/checkout/schedule/schedule-grid")
);
const AddressGrid = dynamic(() => import("@components/checkout/address-grid"));
const ContactGrid = dynamic(
  () => import("@components/checkout/contact/contact-grid")
);
const RightSideView = dynamic(
  () => import("@components/checkout/right-side-view")
);

export default function CheckoutPage() {
  const [customer] = useAtom(customerAtom);
  const { t } = useTranslation();

  const {
    data: user,
    isLoading: loading,
    refetch,
  } = useUserQuery(customer?.value);
  useEffect(() => {
    if (customer?.value) {
      refetch(customer?.value);
    }
  }, [customer?.value]);

  if (loading) return <Loader text={t("common:text-loading")} />;

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-start m-auto lg:space-s-8 w-full max-w-5xl">
        <div className="lg:max-w-2xl w-full space-y-6">
          <CustomerGrid
            className="shadow-700 bg-light p-5 md:p-8"
            //@ts-ignore
            // contact={user?.profile?.contact}
            label={t("text-customer")}
            count={1}
          />
          <ContactGrid
            className="shadow-700 bg-light p-5 md:p-8"
            //@ts-ignore
            contact={user?.profile?.contact}
            label={t("text-contact-number")}
            count={1}
          />

          <AddressGrid
            userId={user?.id!}
            className="shadow-700 bg-light p-5 md:p-8"
            label={t("text-billing-address")}
            count={2}
            //@ts-ignore
            addresses={user?.address?.filter(
              (address) => address?.type === AddressType.Billing
            )}
            atom={billingAddressAtom}
            type={AddressType.Billing}
          />
          <AddressGrid
            userId={user?.id!}
            className="shadow-700 bg-light p-5 md:p-8"
            label={t("text-shipping-address")}
            count={3}
            //@ts-ignore
            addresses={user?.address?.filter(
              (address) => address?.type === AddressType.Shipping
            )}
            atom={shippingAddressAtom}
            type={AddressType.Shipping}
          />
          <ScheduleGrid
            className="shadow-700 bg-light p-5 md:p-8"
            label={t("text-delivery-schedule")}
            count={4}
          />
        </div>
        <div className="w-full lg:w-96 mb-10 sm:mb-12 lg:mb-0 mt-10">
          <RightSideView />
        </div>
      </div>
    </div>
  );
}
CheckoutPage.authenticate = {
  permissions: adminOnly,
};
CheckoutPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["table", "common", "form"])),
  },
});
