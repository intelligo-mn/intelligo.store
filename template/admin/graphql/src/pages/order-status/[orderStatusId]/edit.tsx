import Layout from "@components/layouts/admin";
import CreateOrUpdateOrderStatusForm from "@components/order-status/order-status-form";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useOrderStatusQuery } from "@graphql/order_status.graphql";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";

export default function UpdateOrderStatusPage() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const { data, loading, error } = useOrderStatusQuery({
    variables: {
      id: query.orderStatusId as string,
    },
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-edit-order-status")}
        </h1>
      </div>
      <CreateOrUpdateOrderStatusForm initialValues={data?.orderStatus} />
    </>
  );
}
UpdateOrderStatusPage.authenticate = {
  permissions: adminOnly,
};
UpdateOrderStatusPage.Layout = Layout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common", "table"])),
  },
});
