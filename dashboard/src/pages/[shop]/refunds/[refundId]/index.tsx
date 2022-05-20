import ShopLayout from "@components/layouts/shop";
import { useRouter } from "next/router";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";
import { useRefundQuery } from "@graphql/refunds.graphql";
import RefundDetailsView from "@components/refund/refund-details-view";

export default function RefundDetailsPage() {
  const { t } = useTranslation();
  const { query } = useRouter();

  const { data, loading, error } = useRefundQuery({
    variables: {
      id: query.refundId as string,
    },
  });

  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  return <RefundDetailsView refund={data?.refund} canChangeStatus={false} />;
}
RefundDetailsPage.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
RefundDetailsPage.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "form", "table"])),
  },
});
