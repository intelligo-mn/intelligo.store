import Layout from "@components/layouts/admin";
import { useRouter } from "next/router";
import { useShippingClassQuery } from "@graphql/shipping.graphql";
import CreateOrUpdateShippingForm from "@components/shipping/shipping-form";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";

export default function UpdateShippingPage() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const { data, loading, error } = useShippingClassQuery({
    variables: {
      id: query.shippingId as string,
    },
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-update-shipping")} #{data?.shippingClass?.id}
        </h1>
      </div>
      <CreateOrUpdateShippingForm initialValues={data?.shippingClass} />
    </>
  );
}
UpdateShippingPage.authenticate = {
  permissions: adminOnly,
};
UpdateShippingPage.Layout = Layout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
