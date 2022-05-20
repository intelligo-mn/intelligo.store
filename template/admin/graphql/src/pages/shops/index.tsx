import Card from "@components/common/card";
import Layout from "@components/layouts/admin";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useShopsQuery } from "@graphql/shops.graphql";
import ShopList from "@components/shop/shop-list";
import { useState } from "react";
import Search from "@components/common/search";
import { adminOnly } from "@utils/auth-utils";

export default function AllShopPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error, refetch } = useShopsQuery({
    variables: {
      first: 10,
      page: 1,
      sortedBy: "DESC",
      orderBy: "products_count",
    },
    fetchPolicy: "network-only",
  });

  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    refetch({
      text: `%${searchText}%`,
      page: 1,
    });
  }
  function handlePagination(current: any) {
    refetch({
      text: `%${searchTerm}%`,
      page: current,
    });
  }
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-lg font-semibold text-heading">
            {t("common:sidebar-nav-item-shops")}
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center ms-auto">
          <Search onSearch={handleSearch} />
        </div>
      </Card>
      <ShopList
        shops={data?.shops}
        onPagination={handlePagination}
        refetch={refetch}
      />
    </>
  );
}
AllShopPage.authenticate = {
  permissions: adminOnly,
};
AllShopPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
