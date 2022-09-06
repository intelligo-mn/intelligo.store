import Layout from "apps/dashboard/components/layouts/admin";
import { useRouter } from "next/router";
import CreateOrUpdateTypeForm from "apps/dashboard/components/brand/brand-form";
import ErrorMessage from "apps/dashboard/components/ui/error-message";
import Loader from "apps/dashboard/components/ui/loader/loader";
import { useTypeQuery } from "apps/dashboard/data/type/use-type.query";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function UpdateTypePage() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const {
    data,
    isLoading: loading,
    error,
  } = useTypeQuery(query?.brandid as string);
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-edit-type")}
        </h1>
      </div>
      <CreateOrUpdateTypeForm initialValues={data} />
    </>
  );
}
UpdateTypePage.Layout = Layout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});
