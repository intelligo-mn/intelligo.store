import Layout from "@components/layouts/admin";
import { useRouter } from "next/router";
import CreateOrUpdateTaxForm from "@components/tax/tax-form";
import { useTaxQuery } from "@graphql/tax.graphql";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";

export default function UpdateTaxPage() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const { data, loading, error } = useTaxQuery({
    variables: {
      id: query.taxId as string,
    },
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-update-tax")} #{data?.taxClass?.id}
        </h1>
      </div>
      <CreateOrUpdateTaxForm initialValues={data?.taxClass} />
    </>
  );
}
UpdateTaxPage.authenticate = {
  permissions: adminOnly,
};
UpdateTaxPage.Layout = Layout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});
