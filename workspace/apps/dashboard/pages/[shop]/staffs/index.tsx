import Card from "@components/common/card";
import LinkButton from "@components/ui/link-button";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopLayout from "@components/layouts/shop";
import { useRouter } from "next/router";
import StaffList from "@components/shop/staff-list";
import { adminAndOwnerOnly } from "@utils/auth-utils";
import ErrorMessage from "@components/ui/error-message";
import { useShopQuery } from "@data/shop/use-shop.query";
import { useStaffsQuery } from "@data/shop/use-staffs.query";
import { useState } from "react";
import { SortOrder } from "@ts-types/generated";
import SortForm from "@components/common/sort-form";

export default function StaffsPage() {
  const {
    query: { shop },
  } = useRouter();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [orderBy, setOrder] = useState("created_at");
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);

  const { data: shopData, isLoading: fetchingShopId } = useShopQuery(
    shop as string
  );

  const shopId = shopData?.shop?.id!;
  const {
    data,
    isLoading: loading,
    error,
  } = useStaffsQuery(
    {
      shop_id: Number(shopId),
      page,
      orderBy,
      sortedBy,
    },
    {
      enabled: Boolean(shopId),
    }
  );
  if (fetchingShopId || loading)
    return <Loader text={t("common:text-loading")} />;
  if (error)
    return (
      <ErrorMessage message={error?.response?.data?.message || error.message} />
    );

  function handlePagination(current: any) {
    setPage(current);
  }
  return (
    <>
      <Card className="flex flex-row items-center justify-between mb-8">
        <div className="md:w-1/4">
          <h1 className="text-lg font-semibold text-heading">
            {t("form:text-staff")}
          </h1>
        </div>

        <div className="flex items-center w-3/4 xl:w-2/4 ms-auto">
          <LinkButton href={`/${shop}/staffs/create`} className="h-12 ms-auto">
            <span>+ {t("form:button-label-add-staff")}</span>
          </LinkButton>
        </div>
      </Card>

      <StaffList
        staffs={data?.staffs}
        onPagination={handlePagination}
        onOrder={setOrder}
        onSort={setColumn}
      />
    </>
  );
}
StaffsPage.authenticate = {
  permissions: adminAndOwnerOnly,
};
StaffsPage.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
