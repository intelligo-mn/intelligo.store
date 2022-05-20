import Layout from "@components/layouts/admin";
import { useTypeQuery } from "@graphql/type.graphql";
import { useRouter } from "next/router";
import CreateOrUpdateTypeForm from "@components/group/group-form";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";

export default function UpdateGroupPage() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const { data, loading, error } = useTypeQuery({
    variables: {
      id: query.groupId as string,
    },
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-edit-type")}
        </h1>
      </div>
      <CreateOrUpdateTypeForm initialValues={data?.type} />
    </>
  );
}
UpdateGroupPage.authenticate = {
  permissions: adminOnly,
};
UpdateGroupPage.Layout = Layout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});
