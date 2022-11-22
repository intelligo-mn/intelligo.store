import dayjs from "dayjs";
import Link from "@components/ui/link";
import usePrice from "@lib/use-price";
import { formatAddress } from "@lib/format-address";
import { formatString } from "@lib/format-string";
import { ROUTES } from "@lib/routes";
import { useTranslation } from "next-i18next";
import Badge from "@components/ui/badge";
import { OrderItems } from "@components/orders/order-items";
import SuborderItems from "@components/orders/suborder-items";

export default function OrderView({ order }: any) {
  const { t } = useTranslation("common");

  const { price: total } = usePrice({ amount: order?.paid_total! });
  const { price: sub_total } = usePrice({ amount: order?.amount! });
  const { price: shipping_charge } = usePrice({
    amount: order?.delivery_fee ?? 0,
  });
  const { price: tax } = usePrice({ amount: order?.sales_tax ?? 0 });
  const { price: discount } = usePrice({ amount: order?.discount ?? 0 });

  return (
    <div className="max-w-[1280px] mx-auto mb-14 lg:mb-16">
      <div className="w-full mx-auto shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <div className="mt-5 sm:mt-0 ltr:mr-auto rtl:ml-auto order-2 sm:order-1 text-heading font-semibold flex items-center">
            {t("text-status")} :
            <Badge
              text={order?.status?.name!}
              className="whitespace-nowrap bg-heading text-white font-semibold text-sm ltr:ml-2 rtl:mr-2"
            />
          </div>
          <Link
            href={ROUTES.HOME}
            className="inline-flex items-center text-heading order-1 sm:order-2 text-accent text-base font-semibold underline hover:no-underline"
          >
            {t("text-back-to-home")}
          </Link>
        </div>

        <div className="grid gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-11">
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              {t("text-order-number")}
            </h3>
            <p className="text-sm text-body">{order?.tracking_number}</p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              {t("text-date")}
            </h3>
            <p className="text-sm text-body">
              {dayjs(order?.created_at).format("MMMM D, YYYY")}
            </p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              {t("text-total")}
            </h3>
            <p className="text-sm text-body">{total}</p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              {t("text-payment-method")}
            </h3>
            <p className="text-sm text-body">
              {order?.payment_gateway ?? "N/A"}
            </p>
          </div>
        </div>
        {/* end of order received  */}

        <div className="flex flex-col md:flex-row border border-gray-100 rounded-md">
          <div className="w-full md:w-1/2 ltr:md:pr-3 rtl:md:pl-3 border-r px-5 lg:px-7 py-6 lg:py-7 xl:py-8 border-gray-100">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-5 lg:mb-6">
              {t("text-total-amount")}
            </h2>
            <div className="space-y-4 lg:space-y-5">
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-sub-total")}
                </strong>
                :<span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">{sub_total}</span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-shipping-charge")}
                </strong>
                :<span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">{shipping_charge}</span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-tax")}
                </strong>
                :<span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">{tax}</span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-discount")}
                </strong>
                :<span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">{discount}</span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-total")}
                </strong>
                :<span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">{total}</span>
              </p>
            </div>
          </div>
          {/* end of total amount */}

          <div className="w-full md:w-1/2 px-5 lg:px-7 py-6 lg:py-7 xl:py-8">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-5 lg:mb-6">
              {t("text-order-details")}
            </h2>
            <div className="space-y-4 lg:space-y-5">
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-total-item")}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7 capitalize">
                  {formatString(order?.products?.length, t("text-item"))}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-deliver-time")}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {order?.delivery_time}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-shipping-address")}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {formatAddress(order?.shipping_address!)}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t("text-billing-address")}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {formatAddress(order?.billing_address!)}
                </span>
              </p>
            </div>
          </div>
          {/* end of order details */}
        </div>

        <div className="mt-11">
          <OrderItems products={order?.products} />
        </div>
        {order?.children?.length ? (
          <div className="mt-11">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-3 lg:mb-5 xl:mb-6">
              {t("text-sub-orders")}
            </h2>
            <div>
              <div className="flex items-start mb-6">
                <p className="text-heading text-sm leading-6">
                  <span className="font-bold">{t("text-note")}:</span>{" "}
                  {t("text-message-sub-order")}
                </p>
              </div>
              {Array.isArray(order?.children) && order?.children.length && (
                <SuborderItems items={order?.children} />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
