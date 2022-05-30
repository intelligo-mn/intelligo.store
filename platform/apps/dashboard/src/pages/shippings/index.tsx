import Card from "@intelligo/dashboard/components/common/card";
import Layout from "@intelligo/dashboard/components/layouts/admin";
import ShippingList from "@intelligo/dashboard/components/shipping/shipping-list";
import Search from "@intelligo/dashboard/components/common/search";

import LinkButton from "@intelligo/dashboard/components/ui/link-button";
import ErrorMessage from "@intelligo/dashboard/components/ui/error-message";
import Loader from "@intelligo/dashboard/components/ui/loader/loader";
import { useState } from "react";
import { useShippingClassesQuery } from "@data/shipping/use-shippingClasses.query";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@intelligo/dashboard/utils/routes";
import { SortOrder } from "@intelligo/dashboard/ts-types/generated";

export default function ShippingsPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearch] = useState("");
  const [orderBy, setOrder] = useState("created_at");
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);
  const {
    data,
    isLoading: loading,
    error,
  } = useShippingClassesQuery({
    text: searchTerm,
    orderBy,
    sortedBy,
  });
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;

  function handleSearch({ searchText }: { searchText: string }) {
    setSearch(searchText);
  }
  return (
    <>
      <Card className="flex flex-col xl:flex-row items-center mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-xl font-semibold text-heading">
            {t("form:input-label-shippings")}
          </h1>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center ms-auto">
          <Search onSearch={handleSearch} />

          <LinkButton
            href={`${ROUTES.SHIPPINGS}/create`}
            className="h-12 md:ms-6 w-full md:w-auto"
          >
            <span>
              + {t("form:button-label-add")} {t("form:button-label-shipping")}
            </span>
          </LinkButton>
        </div>
      </Card>
      <ShippingList
        shippings={data?.shippingClasses}
        onOrder={setOrder}
        onSort={setColumn}
      />
    </>
  );
}
ShippingsPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
