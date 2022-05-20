import Card from "@components/common/card";
import Layout from "@components/layouts/admin";
import AttributeList from "@components/attribute/attribute-list";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useAttributesQuery } from "@graphql/attributes.graphql";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";

export default function AttributePage() {
  const { t } = useTranslation();
  const { data, loading, error, refetch } = useAttributesQuery({
    variables: {},
    fetchPolicy: "network-only",
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-xl font-semibold text-heading">
            {t("common:sidebar-nav-item-attributes")}
          </h1>
        </div>
      </Card>

      <AttributeList attributes={data?.attributes} refetch={refetch} />
    </>
  );
}

AttributePage.authenticate = {
  permissions: adminOnly,
};
AttributePage.Layout = Layout;
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
