import dayjs from "dayjs";
import { Table } from "@components/ui/table";
import usePrice from "@utils/use-price";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useTranslation } from "next-i18next";
import { OrderPaginator, OrderStatus } from "__generated__/__types__";

type IProps = {
  orders: OrderPaginator | null | undefined;
  title?: string;
};

const RecentOrders = ({ orders, title }: IProps) => {
  const { data } = orders!;
  const { t } = useTranslation();
  const rowExpandable = (record: any) => record.children?.length;

  const columns = [
    {
      title: t("table:table-item-tracking-number"),
      dataIndex: "tracking_number",
      key: "tracking_number",
      align: "center",
      width: 150,
    },
    {
      title: t("table:table-item-total"),
      dataIndex: "total",
      key: "total",
      align: "center",
      render: (value: any) => {
        const { price } = usePrice({
          amount: value,
        });
        return <span className="whitespace-nowrap">{price}</span>;
      },
    },
    {
      title: t("table:table-item-order-date"),
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
      render: (date: string) => {
        dayjs.extend(relativeTime);
        dayjs.extend(utc);
        dayjs.extend(timezone);
        return (
          <span className="whitespace-nowrap">
            {dayjs.utc(date).tz(dayjs.tz.guess()).fromNow()}
          </span>
        );
      },
    },
    {
      title: t("table:table-item-status"),
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status: OrderStatus) => (
        <span
          className="whitespace-nowrap font-semibold"
          style={{ color: status?.color! }}
        >
          {status?.name}
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        <h3 className="text-heading text-center font-semibold px-4 py-3 bg-light border-b border-border-200">
          {title}
        </h3>
        <Table
          //@ts-ignore
          columns={columns}
          emptyText={t("table:empty-table-data")}
          data={data}
          rowKey="id"
          scroll={{ x: 500 }}
          expandable={{
            expandedRowRender: () => "",
            rowExpandable: rowExpandable,
          }}
        />
      </div>
    </>
  );
};

export default RecentOrders;
