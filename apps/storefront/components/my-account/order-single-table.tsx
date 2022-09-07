import React from "react";
import { Order } from "apps/storefront/framework/rest/types";
import Link from "apps/storefront/components/ui/link";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import usePrice from "apps/storefront/lib/use-price";
import { ROUTES } from "apps/storefront/lib/routes";

type Props = {
  order: Order;
};

const OrderSingleTable: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation();
  const { price: itemTotal } = usePrice({
    amount: order.total,
  });

  return (
    <tr className="border-b border-gray-300 last:border-b-0">
      <td className="px-4 py-5 ltr:text-left rtl:text-right">
        <Link
          href={`${ROUTES.ACCOUNT_ORDERS}/${order.tracking_number}`}
          className="underline hover:no-underline text-body"
        >
          #{order.id}
        </Link>
      </td>
      <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 text-heading">
        {dayjs(order.created_at).format("MMMM D, YYYY")}
      </td>
      <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 text-heading">
        {/* @ts-ignore */}
        {order.status.name}
      </td>
      <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 text-heading">
        {itemTotal} for {order.products.length} items
      </td>
      <td className="ltr:text-right rtl:text-left px-4 py-5 text-heading">
        <Link
          href={`${ROUTES.ACCOUNT_ORDERS}/${order.tracking_number}`}
          className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
        >
          {t("button-view")}
        </Link>
      </td>
    </tr>
  );
};

export default OrderSingleTable;
