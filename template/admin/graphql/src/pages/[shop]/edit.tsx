import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopForm from "@components/shop/shop-form";
import { useEditShopQuery } from "@graphql/shops.graphql";
import ShopLayout from "@components/layouts/shop";
import { adminAndOwnerOnly } from "@utils/auth-utils";

export default function UpdateProductPage() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const { data, loading, error } = useEditShopQuery({
    variables: {
      slug: query.shop as string,
    },
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-edit-product")}
        </h1>
      </div>
      <ShopForm initialValues={data?.shop} />
    </>
  );
}
UpdateProductPage.authenticate = {
  permissions: adminAndOwnerOnly,
};
UpdateProductPage.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});
