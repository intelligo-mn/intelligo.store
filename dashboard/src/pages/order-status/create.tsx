import Layout from "@components/layouts/admin";
import CreateOrUpdateOrderStatusForm from "@components/order-status/order-status-form";
import { adminOnly } from "@utils/auth-utils";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CreateOrderStatusPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-create-order-status")}
        </h1>
      </div>
      <CreateOrUpdateOrderStatusForm />
    </>
  );
}
CreateOrderStatusPage.authenticate = {
  permissions: adminOnly,
};
CreateOrderStatusPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
