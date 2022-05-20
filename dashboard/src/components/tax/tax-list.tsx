import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import {
  Tax,
  QueryTaxClassesOrderByColumn,
  SortOrder,
} from "__generated__/__types__";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  taxes: Tax[] | undefined;
  refetch: Function;
};

const TaxList = ({ taxes, refetch }: IProps) => {
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
            column === QueryTaxClassesOrderByColumn.Name
          }
          isActive={column === QueryTaxClassesOrderByColumn.Name}
        />
      ),
      className: "cursor-pointer",
      onHeaderCell: () => onHeaderClick(QueryTaxClassesOrderByColumn.Name),
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      width: 150,
    },
    {
      title: (
        <TitleWithSort
          title={`${t("table:table-item-rate")} (%)`}
          ascending={
            order === SortOrder.Asc &&
            column === QueryTaxClassesOrderByColumn.Rate
          }
          isActive={column === QueryTaxClassesOrderByColumn.Rate}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "rate",
      key: "rate",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryTaxClassesOrderByColumn.Rate),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-country")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryTaxClassesOrderByColumn.Country
          }
          isActive={column === QueryTaxClassesOrderByColumn.Country}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "country",
      key: "country",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryTaxClassesOrderByColumn.Country),
    },
    {
      title: t("table:table-item-city"),
      dataIndex: "city",
      key: "city",
      align: "center",
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-state")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryTaxClassesOrderByColumn.State
          }
          isActive={column === QueryTaxClassesOrderByColumn.State}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "state",
      key: "state",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryTaxClassesOrderByColumn.State),
    },
    {
      title: t("table:table-item-zip"),
      dataIndex: "zip",
      key: "zip",
      align: "center",
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: "center",
      render: (id: string) => (
        <ActionButtons
          id={id}
          editUrl={`${ROUTES.TAXES}/${id}/edit`}
          deleteModalView="DELETE_TAX"
        />
      ),
      width: 200,
    },
  ];

  return (
    <div className="rounded overflow-hidden shadow mb-8">
      {/* @ts-ignore */}
      <Table
        columns={columns}
        emptyText={t("table:empty-table-data")}
        data={taxes}
        rowKey="id"
        scroll={{ x: 900 }}
      />
    </div>
  );
};

export default TaxList;
