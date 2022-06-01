import { useWindowSize } from "@utils/use-window-size";
import { useTranslation } from "next-i18next";
import { Order } from "@framework/types";
import OrderSingleTable from "@components/my-account/order-single-list";
import OrderSingleList from "@components/my-account/order-single-table";
import React from "react";
import { PaginatedOrder } from "@framework/orders/orders.query";
import Pagination from "@components/ui/pagination";

type Props = {
  orders: PaginatedOrder | undefined | null;
  onPagination: (key: number) => void;
};

const OrdersTable: React.FC<Props> = ({ orders, onPagination }: Props) => {
  const { width } = useWindowSize();
  const { t } = useTranslation("common");

  const { data, paginatorInfo }: any = orders;

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t("text-orders")}
      </h2>
      <div className="w-full flex flex-col">
        {width >= 1025 ? (
          <table>
            <thead className="text-sm lg:text-base">
              <tr>
                <th className="bg-gray-100 p-4 text-heading font-semibold ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md w-24">
                  {t("text-order")}
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold ltr:text-left rtl:text-right lg:text-center w-40 xl:w-56">
                  {t("text-date")}
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold ltr:text-left rtl:text-right lg:text-center w-36 xl:w-44">
                  {t("text-status")}
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold ltr:text-left rtl:text-right lg:text-center">
                  {t("text-total")}
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold ltr:text-left rtl:text-right ltr:lg:text-right rtl:lg:text-left ltr:last:rounded-tr-md rtl:last:rounded-tl-md w-24">
                  {t("text-actions")}
                </th>
              </tr>
            </thead>
            <tbody className="text-sm lg:text-base">
              {data &&
                data?.map((order: Order) => (
                  <OrderSingleList key={order.id} order={order} />
                ))}
            </tbody>
          </table>
        ) : (
          <div className="w-full space-y-4">
            {data &&
              data?.map((order: Order) => (
                <OrderSingleTable key={order.id} order={order} />
              ))}
          </div>
        )}
      </div>
      {/* Pagination */}
      {!!paginatorInfo.total && (
        <div className="flex justify-end items-center pt-5">
          <Pagination
            total={paginatorInfo.total}
            current={paginatorInfo.currentPage}
            pageSize={paginatorInfo.perPage}
            onChange={onPagination}
          />
        </div>
      )}
    </>
  );
};

export default OrdersTable;
