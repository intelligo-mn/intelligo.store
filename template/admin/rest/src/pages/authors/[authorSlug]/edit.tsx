import Layout from "@components/layouts/admin";
import AuthorCreateOrUpdateForm from "@components/author/author-form";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";
import { GetStaticProps } from "next";
import { useAuthorQuery } from "@data/author/use-author.query";

export default function UpdateAuthorPage() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const {
    data,
    isLoading: loading,
    error,
  } = useAuthorQuery(query.authorSlug as string);
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-update-author")}
        </h1>
      </div>
      <AuthorCreateOrUpdateForm initialValues={data} />
    </>
  );
}
UpdateAuthorPage.authenticate = {
  permissions: adminOnly,
};
UpdateAuthorPage.Layout = Layout;

export const getServerSideProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["form", "common"])),
  },
});
