import { getLayout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import OrdersTable from "@components/my-account/orders-table";
import ErrorMessage from "@components/ui/error-message";
import Spinner from "@components/ui/loaders/spinner/spinner";
import { useOrdersQuery } from "@framework/orders/orders.query";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import NotFound from "@components/404/not-found";

export { getStaticProps } from "@framework/ssr/common";

export default function OrdersTablePage() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const {
    data,
    isLoading: loading,
    error,
  } = useOrdersQuery({
    page,
    limit: 5,
  });

  if (error) return <ErrorMessage message={error.message} />;

  function onPagination(current: any) {
    setPage(current);
  }

  return (
    <AccountLayout>
      {loading ? (
        <div className="flex items-center justify-center w-full h-[300px]">
          <Spinner showText={false} />
        </div>
      ) : (
        <>
          {data?.orders?.data?.length ? (
            <OrdersTable orders={data?.orders} onPagination={onPagination} />
          ) : (
            <NotFound text={t("text-no-order-found")} />
          )}
        </>
      )}
    </AccountLayout>
  );
}

OrdersTablePage.authenticate = true;
OrdersTablePage.getLayout = getLayout;
