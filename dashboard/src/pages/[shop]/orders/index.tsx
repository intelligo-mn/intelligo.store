import Card from "@components/common/card";
import Search from "@components/common/search";
import OrderList from "@components/order/order-list";
import { useOrdersQuery } from "@graphql/orders.graphql";
import { LIMIT } from "@utils/constants";
import { useState } from "react";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopLayout from "@components/layouts/shop";
import { useRouter } from "next/router";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";
import { useShopQuery } from "@graphql/shops.graphql";

export default function Orders() {
  const {
    query: { shop },
  } = useRouter();
  const { t } = useTranslation();
  const { data: shopData, loading: fetchingShop } = useShopQuery({
    variables: {
      slug: shop as string,
    },
  });
  const shopId = shopData?.shop?.id!;
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error, refetch } = useOrdersQuery({
    skip: !Boolean(shopId),
    variables: {
      first: LIMIT,
      page: 1,
      orderBy: "created_at",
      sortedBy: "DESC",
      shop_id: shopId,
    },
    fetchPolicy: "network-only",
  });
  if (loading || fetchingShop)
    return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    refetch({
      tracking_number: `%${searchText}%`,
      page: 1,
    });
  }
  function handlePagination(current: any) {
    refetch({
      tracking_number: `%${searchTerm}%`,
      page: current,
    });
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
        refetch={refetch}
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
