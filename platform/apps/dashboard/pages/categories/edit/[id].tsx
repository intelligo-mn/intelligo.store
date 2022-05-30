import Layout from "apps/dashboard/components/layouts/admin";
import CreateOrUpdateCategoriesForm from "apps/dashboard/components/category/category-form";
import { useRouter } from "next/router";
import ErrorMessage from "apps/dashboard/components/ui/error-message";
import Loader from "apps/dashboard/components/ui/loader/loader";
import { useCategoryQuery } from "apps/dashboard/data/category/use-category.query";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function UpdateCategoriesPage() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const {
    data,
    isLoading: loading,
    error,
  } = useCategoryQuery(query.id as string);

  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-edit-category")}
        </h1>
      </div>

      <CreateOrUpdateCategoriesForm initialValues={data} />
    </>
  );
}

UpdateCategoriesPage.Layout = Layout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});
