import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import {
  Shipping,
  QueryShippingClassesOrderByColumn,
  SortOrder,
} from "__generated__/__types__";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  shippings: Shipping[] | undefined;
  refetch: Function;
};

const ShippingList = ({ shippings, refetch }: IProps) => {
  const { t } = useTranslation();
  const { alignLeft } = useIsRTL();

  const [order, setOrder] = useState<SortOrder>(SortOrder.Desc);
  const [column, setColumn] = useState<string>();

  const debouncedHeaderClick = useMemo(
    () =>
      debounce((value) => {
        setColumn(value);
        setOrder(order === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc);
        refetch({
          orderBy: [
            {
              column: value,
              order: order === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,
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
      width: 62,
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-title")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryShippingClassesOrderByColumn.Name
          }
          isActive={column === QueryShippingClassesOrderByColumn.Name}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      width: 150,
      onHeaderCell: () => onHeaderClick(QueryShippingClassesOrderByColumn.Name),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-amount")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryShippingClassesOrderByColumn.Amount
          }
          isActive={column === QueryShippingClassesOrderByColumn.Amount}
        />
      ),
      className: "cursor-pointer",
      onHeaderCell: () =>
        onHeaderClick(QueryShippingClassesOrderByColumn.Amount),
      dataIndex: "amount",
      key: "amount",
      align: "center",
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-global")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryShippingClassesOrderByColumn.IsGlobal
          }
          isActive={column === QueryShippingClassesOrderByColumn.IsGlobal}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "is_global",
      key: "is_global",
      align: "center",
      onHeaderCell: () =>
        onHeaderClick(QueryShippingClassesOrderByColumn.IsGlobal),
      render: (value: boolean) => (
        <span className="capitalize">{value.toString()}</span>
      ),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-type")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryShippingClassesOrderByColumn.Type
          }
          isActive={column === QueryShippingClassesOrderByColumn.Type}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "type",
      key: "type",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryShippingClassesOrderByColumn.Type),
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: "center",
      render: (id: string) => (
        <ActionButtons
          id={id}
          editUrl={`${ROUTES.SHIPPINGS}/${id}/edit`}
          deleteModalView="DELETE_SHIPPING"
        />
      ),
      width: 200,
    },
  ];

  return (
    <div className="rounded overflow-hidden shadow mb-8">
      <Table
        //@ts-ignore
        columns={columns}
        emptyText={t("table:empty-table-data")}
        data={shippings}
        rowKey="id"
        scroll={{ x: 900 }}
      />
    </div>
  );
};

export default ShippingList;
