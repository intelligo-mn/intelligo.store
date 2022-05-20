import Card from "@components/common/card";
import Layout from "@components/layouts/admin";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOnly } from "@utils/auth-utils";
import { LIMIT } from "@utils/constants";
import { useRefundsQuery } from "@graphql/refunds.graphql";
import RefundList from "@components/refund/refund-list";

export default function RefundsPage() {
  const { t } = useTranslation();

  const { data, loading, error, refetch } = useRefundsQuery({
    variables: {
      first: LIMIT,
      page: 1,
      orderBy: "updated_at",
      sortedBy: "DESC",
    },
    fetchPolicy: "network-only",
  });

  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  function handlePagination(current: any) {
    refetch({
      page: current,
    });
  }
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-lg font-semibold text-heading">
            {t("common:sidebar-nav-item-refunds")}
          </h1>
        </div>
      </Card>

      <RefundList
        refunds={data?.refunds}
        onPagination={handlePagination}
        refetch={refetch}
      />
    </>
  );
}
RefundsPage.authenticate = {
  permissions: adminOnly,
};
RefundsPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
