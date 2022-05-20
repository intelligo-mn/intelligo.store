import Pagination from "@components/ui/pagination";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";

import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import {
  OrderStatus,
  OrderStatusPaginator,
  QueryOrderStatusesOrderByColumn,
  SortOrder,
} from "@common/generated-types";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  order_statuses: OrderStatusPaginator | undefined | null;
  onPagination: (key: number) => void;
  refetch: Function;
};

const OrderStatusList = ({ order_statuses, onPagination, refetch }: IProps) => {
  const { data, paginatorInfo } = order_statuses!;
  const { t } = useTranslation();
  const { alignLeft, alignRight } = useIsRTL();

  const [order, setOrder] = useState<SortOrder>(SortDirection.DESCENDING);
  const [column, setColumn] = useState<string>();

  const debouncedHeaderClick = useMemo(
    () =>
      debounce((value) => {
        setColumn(value);
        setOrder(order === SortDirection.DESCENDING ? SortDirection.ASCENDING : SortDirection.DESCENDING);
        refetch({
          orderBy: [
            {
              column: value,
              order: order === SortDirection.DESCENDING ? SortDirection.ASCENDING : SortDirection.DESCENDING,
            },
          ],
        });
      }, 300),
    [order]
  );

  const onHeaderClick = (value: string | undefined) => ({
    onClick: () => {
      debouncedHeaderClick(value);
    },
  });

  const columns = [
    {
      title: t("table:table-item-id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 70,
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-title")}
          ascending={
            order === SortDirection.ASCENDING &&
            column === QueryOrderStatusesOrderByColumn.Name
          }
          isActive={column === QueryOrderStatusesOrderByColumn.Name}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      onHeaderCell: () => onHeaderClick(QueryOrderStatusesOrderByColumn.Name),
      render: (name: string, record: OrderStatus) => (
        <span className="font-semibold" style={{ color: record.color! }}>
          {name}
        </span>
      ),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-serial")}
          ascending={
            order === SortDirection.ASCENDING &&
            column === QueryOrderStatusesOrderByColumn.Serial
          }
          isActive={column === QueryOrderStatusesOrderByColumn.Serial}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "serial",
      key: "serial",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryOrderStatusesOrderByColumn.Serial),
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: alignRight,
      render: (id: string) => (
        <ActionButtons
          id={id}
          editUrl={`${ROUTES.ORDER_STATUS}/${id}/edit`}
          deleteModalView="DELETE_ORDER_STATUS"
        />
      ),
    },
  ];

  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        <Table
          //@ts-ignore
          columns={columns}
          emptyText={t("table:empty-table-data")}
          data={data}
          rowKey="id"
          scroll={{ x: 380 }}
        />
      </div>

      {!!paginatorInfo.total && (
        <div className="flex justify-end items-center">
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

export default OrderStatusList;
