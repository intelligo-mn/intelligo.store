import { CartIconBig } from "@components/icons/cart-icon-bag";
import { CoinIcon } from "@components/icons/coin-icon";
import ColumnChart from "@components/widgets/column-chart";
import StickerCard from "@components/widgets/sticker-card";
import ErrorMessage from "@components/ui/error-message";
import usePrice from "@utils/use-price";
import Loader from "@components/ui/loader/loader";
import RecentOrders from "@components/order/recent-orders";
import PopularProductList from "@components/product/popular-product-list";
import { useOrdersQuery } from "@data/order/use-orders.query";
import { usePopularProductsQuery } from "@data/analytics/use-popular-products.query";
import { useAnalyticsQuery } from "@data/analytics/use-analytics.query";
import { useTranslation } from "next-i18next";
import { useWithdrawsQuery } from "@data/withdraw/use-withdraws.query";
import WithdrawTable from "@components/withdraw/withdraw-table";
import { ShopIcon } from "@components/icons/sidebar";
import { DollarIcon } from "@components/icons/shops/dollar";

export default function Dashboard() {
  const { t } = useTranslation();
  const { data, isLoading: loading } = useAnalyticsQuery();
  const { price: total_revenue } = usePrice(
    data && {
      amount: data?.totalRevenue!,
    }
  );
  const { price: todays_revenue } = usePrice(
    data && {
      amount: data?.todaysRevenue!,
    }
  );

  const {
    data: orderData,
    isLoading: orderLoading,
    error: orderError,
  } = useOrdersQuery({
    limit: 10,
    page: 1,
  });
  const {
    data: popularProductData,
    isLoading: popularProductLoading,
    error: popularProductError,
  } = usePopularProductsQuery({ limit: 10 });

  const { data: withdrawsData, isLoading: withdrawLoading } = useWithdrawsQuery(
    { limit: 10 }
  );

  if (loading || orderLoading || popularProductLoading || withdrawLoading) {
    return <Loader text={t("common:text-loading")} />;
  }
  if (orderError || popularProductError) {
    return (
      <ErrorMessage
        message={orderError?.message || popularProductError?.message}
      />
    );
  }
  let salesByYear: number[] = Array.from({ length: 12 }, (_) => 0);
  if (!!data?.totalYearSaleByMonth?.length) {
    salesByYear = data.totalYearSaleByMonth.map((item: any) =>
      item.total.toFixed(2)
    );
  }
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        <div className="w-full ">
          <StickerCard
            titleTransKey="sticker-card-title-rev"
            subtitleTransKey="sticker-card-subtitle-rev"
            icon={<DollarIcon className="w-7 h-7" color="#047857" />}
            iconBgStyle={{ backgroundColor: "#A7F3D0" }}
            price={total_revenue}
          />
        </div>
        <div className="w-full ">
          <StickerCard
            titleTransKey="sticker-card-title-order"
            subtitleTransKey="sticker-card-subtitle-order"
            icon={<CartIconBig />}
            price={data?.totalOrders}
          />
        </div>
        <div className="w-full ">
          <StickerCard
            titleTransKey="sticker-card-title-today-rev"
            icon={<CoinIcon />}
            price={todays_revenue}
          />
        </div>
        <div className="w-full ">
          <StickerCard
            titleTransKey="sticker-card-title-total-shops"
            icon={<ShopIcon className="w-6" color="#1D4ED8" />}
            iconBgStyle={{ backgroundColor: "#93C5FD" }}
            price={data?.totalShops}
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap mb-6">
        <ColumnChart
          widgetTitle="Sale History"
          colors={["#03D3B5"]}
          series={salesByYear}
          categories={[
            t("common:january"),
            t("common:february"),
            t("common:march"),
            t("common:april"),
            t("common:may"),
            t("common:june"),
            t("common:july"),
            t("common:august"),
            t("common:september"),
            t("common:october"),
            t("common:november"),
            t("common:december"),
          ]}
        />
      </div>

      <div className="w-full flex flex-wrap mb-6">
        <div className="w-full sm:w-1/2 xl:w-1/2 sm:px-3 sm:pl-0 mb-6 xl:mb-0">
          <RecentOrders
            orders={orderData?.orders?.data}
            title={t("table:recent-order-table-title")}
          />
        </div>

        <div className="w-full sm:w-1/2 xl:w-1/2 sm:px-3 sm:pr-0 mb-6 xl:mb-0">
          <WithdrawTable
            //@ts-ignore
            withdraws={withdrawsData?.withdraws}
            title={t("table:withdraw-table-title")}
          />
        </div>
      </div>
      <div className="w-full sm:pe-0 mb-6 xl:mb-0">
        <PopularProductList
          products={popularProductData}
          title={t("table:popular-products-table-title")}
        />
      </div>
    </>
  );
}
