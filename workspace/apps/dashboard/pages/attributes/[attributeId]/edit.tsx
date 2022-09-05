import Layout from "@components/layouts/admin";
import { useRouter } from "next/router";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import CreateOrUpdateAttributeForm from "@components/attribute/attribute-form";
import { useAttributeQuery } from "@data/attributes/use-attribute.query";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";

export default function UpdateAttributePage() {
  const { t } = useTranslation();
  const router = useRouter();
  const {
    data,
    isLoading: loading,
    error,
  } = useAttributeQuery(router.query.attributeId as string);
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:edit-attribute")}
        </h1>
      </div>
      <CreateOrUpdateAttributeForm initialValues={data?.attribute} />
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};
UpdateAttributePage.Layout = Layout;
