import Pagination from "@components/ui/pagination";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { getIcon } from "@utils/get-icon";
import * as categoriesIcon from "@components/icons/category";
import { ROUTES } from "@utils/routes";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import { SortOrder } from "@ts-types/generated";
import { useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  tags: any | undefined | null;
  onPagination: (key: number) => void;
  onSort: (current: any) => void;
  onOrder: (current: string) => void;
};

const TagList = ({ tags, onPagination, onSort, onOrder }: IProps) => {
  const { t } = useTranslation();
  const { data, paginatorInfo } = tags! ?? {};
  const rowExpandable = (record: any) => record.children?.length;

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
      width: 60,
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
    },
    {
      title: t("table:table-item-slug"),
      dataIndex: "slug",
      key: "slug",
      align: "center",
      ellipsis: true,
    },
    {
      title: t("table:table-item-group"),
      dataIndex: "type",
      key: "type",
      align: alignLeft,
      render: (type: any) => (
        <div
          className="whitespace-nowrap truncate overflow-hidden"
          title={type?.name}
        >
          {type?.name}
        </div>
      ),
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: "center",
      width: 90,
      render: (id: string) => (
        <ActionButtons
          id={id}
          editUrl={`${ROUTES.TAGS}/${id}/edit`}
          deleteModalView="DELETE_TAG"
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
          //@ts-ignore
          data={data}
          rowKey="id"
          scroll={{ x: 1000 }}
          expandable={{
            expandedRowRender: () => "",
            rowExpandable: rowExpandable,
          }}
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

export default TagList;
