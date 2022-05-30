import Layout from "apps/dashboard/src/components/layouts/admin";
import CreateOrUpdateProductForm from "apps/dashboard/src/components/product/product-form";
import ErrorMessage from "apps/dashboard/src/components/ui/error-message";
import Loader from "apps/dashboard/src/components/ui/loader/loader";
import { useProductQuery } from "apps/dashboard/src/data/product/product.query";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function UpdateProductPage() {
  const { t } = useTranslation();
  const { query } = useRouter();
  const {
    data,
    isLoading: loading,
    error,
  } = useProductQuery(query.productId as string);

  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error?.message as string} />;
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">Edit Product</h1>
      </div>
      <CreateOrUpdateProductForm initialValues={data} />
    </>
  );
}
UpdateProductPage.Layout = Layout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "form"])),
  },
});
