import Card from "apps/dashboard/components/common/card";
import Layout from "apps/dashboard/components/layouts/admin";
import Search from "apps/dashboard/components/common/search";
import CouponList from "apps/dashboard/components/coupon/coupon-list";
import LinkButton from "apps/dashboard/components/ui/link-button";
import { useState } from "react";
import ErrorMessage from "apps/dashboard/components/ui/error-message";
import Loader from "apps/dashboard/components/ui/loader/loader";
import { useCouponsQuery } from "apps/dashboard/data/coupon/use-coupons.query";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SortOrder } from "apps/dashboard/ts-types/generated";
import { adminOnly } from "apps/dashboard/utils/auth-utils";

export default function Coupons() {
  const { t } = useTranslation();
  const [orderBy, setOrder] = useState("created_at");
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const {
    data,
    isLoading: loading,
    error,
  } = useCouponsQuery({
    limit: 20,
    page,
    text: searchTerm,
    orderBy,
    sortedBy,
  });

  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    setPage(1);
  }
  function handlePagination(current: number) {
    setPage(current);
  }
  return (
    <>
      <Card className="flex flex-col xl:flex-row items-center mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-xl font-semibold text-heading">
            {t("form:input-label-coupons")}
          </h1>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center ms-auto">
          <Search onSearch={handleSearch} />

          <LinkButton
            href="/coupons/create"
            className="h-12 md:ms-6 w-full md:w-auto"
          >
            <span>+ {t("form:button-label-add-coupon")}</span>
          </LinkButton>
        </div>
      </Card>
      <CouponList
        coupons={data?.coupons}
        onPagination={handlePagination}
        onOrder={setOrder}
        onSort={setColumn}
      />
    </>
  );
}

Coupons.authenticate = {
  permissions: adminOnly,
};
Coupons.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common", "table"])),
  },
});
