import { Table } from "@components/ui/table";
import usePrice from "@lib/use-price";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@lib/locals";
import { useMemo } from "react";
import { Image } from "@components/ui/image";
import { productPlaceholder } from "@lib/placeholders";

const OrderItemList = (_: any, record: any) => {
  const { price } = usePrice({
    amount: record.pivot?.unit_price,
  });
  let name = record.name;
  if (record?.pivot?.variation_option_id) {
    const variationTitle = record?.variation_options?.find(
      (vo: any) => vo?.id === record?.pivot?.variation_option_id
    )["title"];
    name = `${name} - ${variationTitle}`;
  }
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 flex flex-shrink-0 rounded overflow-hidden relative">
        <Image
          src={record.image?.thumbnail ?? productPlaceholder}
          alt={name}
          className="w-full h-full object-cover bg-gray-200"
          layout="fill"
        />
      </div>

      <div className="flex flex-col ltr:ml-4 rtl:mr-4 overflow-hidden">
        <div className="flex mb-2 text-body">
          <span className="text-[15px] truncate inline-block overflow-hidden">
            {name} x&nbsp;
          </span>
          <span className="text-[15px] text-heading font-semibold truncate inline-block overflow-hidden">
            {record.unit}
          </span>
        </div>
        <span className="text-[15px] text-accent font-semibold mb-1 truncate inline-block overflow-hidden">
          {price}
        </span>
      </div>
    </div>
  );
};
export const OrderItems = ({ products }: { products: any }) => {
  const { t } = useTranslation("common");
  const { alignLeft, alignRight } = useIsRTL();

  const orderTableColumns = useMemo(
    () => [
      {
        title: <span className="ltr:pl-20 rtl:pr-20 ltr:ml-2 rtl:mr-2">{t("text-product")}</span>,
        dataIndex: "",
        key: "items",
        align: alignLeft,
        width: 250,
        ellipsis: true,
        render: OrderItemList,
      },
      {
        title: t("text-quantity"),
        dataIndex: "pivot",
        key: "pivot",
        align: "center",
        width: 100,
        render: function renderQuantity(pivot: any) {
          return (
            <p className="text-[15px] md:text-base font-semibold text-heading">
              {pivot.order_quantity}
            </p>
          );
        },
      },
      {
        title: t("text-price"),
        dataIndex: "pivot",
        key: "price",
        align: "center",
        width: 100,
        render: function RenderPrice(pivot: any) {
          const { price } = usePrice({
            amount: pivot.subtotal,
          });
          return (
            <p className="text-[15px] md:text-base font-semibold text-heading">
              {price}
            </p>
          );
        },
      },
    ],
    [alignLeft, alignRight, t]
  );

  return (
    <Table
      //@ts-ignore
      columns={orderTableColumns}
      data={products}
      rowKey={(record: any) =>
        record.pivot?.variation_option_id
          ? record.pivot.variation_option_id
          : record.created_at
      }
      className="orderDetailsTable w-full"
      scroll={{ x: 350, y: 500 }}
    />
  );
};
