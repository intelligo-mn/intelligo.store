import Pagination from "@components/ui/pagination";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { ROUTES } from "@utils/routes";
import {
  OrderStatus,
  OrderStatusPaginator,
  SortOrder,
} from "@ts-types/generated";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import { useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  order_statuses: OrderStatusPaginator | undefined | null;
  onPagination: (key: number) => void;
  onSort: (current: any) => void;
  onOrder: (current: string) => void;
};
const OrderStatusList = ({
  order_statuses,
  onPagination,
  onSort,
  onOrder,
}: IProps) => {
  const { data, paginatorInfo } = order_statuses!;
  const { t } = useTranslation();
  const { alignLeft, alignRight } = useIsRTL();

  const [sortingObj, setSortingObj] = useState<{
    sort: SortOrder;
    column: string | null;
  }>({
    sort: SortOrder.Desc,
    column: null,
  });

  const onHeaderClick = (column: string | null) => ({
    onClick: () => {
      onSort((currentSortDirection: SortOrder) =>
        currentSortDirection === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc
      );
      onOrder(column!);

      setSortingObj({
        sort:
          sortingObj.sort === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,
        column: column,
      });
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
            sortingObj.sort === SortOrder.Asc && sortingObj.column === "name"
          }
          isActive={sortingObj.column === "name"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      onHeaderCell: () => onHeaderClick("name"),
      render: (name: string, record: OrderStatus) => (
        <span className="font-semibold" style={{ color: record?.color! }}>
          {name}
        </span>
      ),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-serial")}
          ascending={
            sortingObj.sort === SortOrder.Asc && sortingObj.column === "serial"
          }
          isActive={sortingObj.column === "serial"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "serial",
      key: "serial",
      align: "center",
      onHeaderCell: () => onHeaderClick("serial"),
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: alignRight,
      render: (id: string, record: OrderStatus) => (
        <ActionButtons
          id={id}
          editUrl={`${ROUTES.ORDER_STATUS}/edit/${record?.name}`}
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
