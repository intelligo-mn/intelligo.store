import CreateOrUpdateProductForm from "@components/product/product-form";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopLayout from "@components/layouts/shop";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";
import { useProductQuery } from "@data/product/product.query";

export default function UpdateProductPage() {
  const { query } = useRouter();
  const { t } = useTranslation();

  const {
    data,
    isLoading: loading,
    error,
  } = useProductQuery(query.productId as string);
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-edit-product")}
        </h1>
      </div>
      <CreateOrUpdateProductForm initialValues={data} />
    </>
  );
}
UpdateProductPage.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
UpdateProductPage.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});
