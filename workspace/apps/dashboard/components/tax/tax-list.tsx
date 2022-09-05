import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { SortOrder, Tax } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import { useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  taxes: Tax[] | undefined;
  onSort: (current: any) => void;
  onOrder: (current: string) => void;
};
const TaxList = ({ taxes, onSort, onOrder }: IProps) => {
  const { t } = useTranslation();
  const { alignLeft } = useIsRTL();

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
      width: 62,
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
      width: 150,
      onHeaderCell: () => onHeaderClick("name"),
    },
    {
      title: (
        <TitleWithSort
          title={`${t("table:table-item-rate")} (%)`}
          ascending={
            sortingObj.sort === SortOrder.Asc && sortingObj.column === "rate"
          }
          isActive={sortingObj.column === "rate"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "rate",
      key: "rate",
      align: "center",
      onHeaderCell: () => onHeaderClick("rate"),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-country")}
          ascending={
            sortingObj.sort === SortOrder.Asc && sortingObj.column === "country"
          }
          isActive={sortingObj.column === "country"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "country",
      key: "country",
      align: "center",
      onHeaderCell: () => onHeaderClick("country"),
    },
    {
      title: t("table:table-item-city"),
      dataIndex: "city",
      key: "city",
      align: "center",
    },
    {
      title: t("table:table-item-state"),
      dataIndex: "state",
      key: "state",
      align: "center",
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
          editUrl={`${ROUTES.TAXES}/edit/${id}`}
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
