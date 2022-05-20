import Card from "@components/common/card";
import Search from "@components/common/search";
import OrderList from "@components/order/order-list";
import { LIMIT } from "@utils/constants";
import { useState } from "react";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopLayout from "@components/layouts/shop";
import { useRouter } from "next/router";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";
import { useOrdersQuery } from "@data/order/use-orders.query";
import { SortOrder } from "@ts-types/generated";
import { useShopQuery } from "@data/shop/use-shop.query";

export default function Orders() {
  const {
    query: { shop },
  } = useRouter();
  const { t } = useTranslation();
  const [orderBy, setOrder] = useState("created_at");
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);
  const { data: shopData, isLoading: fetchingShop } = useShopQuery(
    shop as string
  );
  const shopId = shopData?.shop?.id!;
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const {
    data,
    isLoading: loading,
    error,
  } = useOrdersQuery(
    {
      limit: LIMIT,
      page,
      text: searchTerm,
      orderBy,
      sortedBy,
      shop_id: Number(shopId),
    },
    {
      enabled: Boolean(shopId),
    }
  );
  if (loading || fetchingShop)
    return <Loader text={t("common:text-loading")} />;
  if (error)
    return (
      <ErrorMessage message={error?.response?.data?.message || error.message} />
    );
  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
  }
  function handlePagination(current: any) {
    setPage(current);
  }
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-lg font-semibold text-heading">
            {t("form:input-label-orders")}
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center ms-auto">
          <Search onSearch={handleSearch} />
        </div>
      </Card>

      <OrderList
        orders={data?.orders}
        onPagination={handlePagination}
        onOrder={setOrder}
        onSort={setColumn}
      />
    </>
  );
}
Orders.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
Orders.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
