import Card from "@components/common/card";
import ShopLayout from "@components/layouts/shop";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";
import { LIMIT } from "@utils/constants";
import { useShopQuery } from "@data/shop/use-shop.query";
import { useRefundsQuery } from "@data/refunds/use-refunds.query";
import RefundList from "@components/refund/refund-list";
import { useRouter } from "next/router";
import { useState } from "react";
import { SortOrder } from "@ts-types/generated";

export default function RefundsPage() {
  const {
    query: { shop },
  } = useRouter();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [orderBy, setOrder] = useState("created_at");
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);
  const { data: shopData, isLoading: fetchingShop } = useShopQuery(
    shop as string
  );
  const shopId = shopData?.shop?.id!;
  const {
    data,
    isLoading: loading,
    error,
  } = useRefundsQuery(
    {
      shop_id: Number(shopId),
      limit: LIMIT,
      page,
      sortedBy,
      orderBy,
    },
    {
      enabled: Boolean(shopId),
    }
  );

  if (loading || fetchingShop)
    return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  function handlePagination(current: any) {
    setPage(current);
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
        onOrder={setOrder}
        onSort={setColumn}
      />
    </>
  );
}
RefundsPage.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
RefundsPage.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
