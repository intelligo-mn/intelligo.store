import Pagination from "@components/ui/pagination";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { getIcon } from "@utils/get-icon";
import * as categoriesIcon from "@components/icons/category";
import { ROUTES } from "@utils/routes";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import {
  CategoryPaginator,
  SortOrder,
  QueryCategoriesOrderByColumn,
} from "__generated__/__types__";
import { useMemo, useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";
import debounce from "lodash/debounce";

export type IProps = {
  categories: CategoryPaginator | undefined | null;
  onPagination: (key: number) => void;
  refetch: Function;
};

const CategoryList = ({ categories, onPagination, refetch }: IProps) => {
  const { t } = useTranslation();
  const { data, paginatorInfo } = categories!;
  const rowExpandable = (record: any) => record.children?.length;
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
      width: 60,
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-title")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryCategoriesOrderByColumn.Name
          }
          isActive={column === QueryCategoriesOrderByColumn.Name}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      width: 150,
      // onHeaderCell: () => onHeaderClick(QueryCategoriesOrderByColumn.Name),
      onHeaderCell: () => onHeaderClick(QueryCategoriesOrderByColumn.Name),
    },
    {
      title: t("table:table-item-details"),
      dataIndex: "details",
      key: "details",
      align: alignLeft,
      ellipsis: true,
      width: 200,
    },
    {
      title: t("table:table-item-image"),
      dataIndex: "image",
      key: "image",
      align: "center",

      render: (image: any, { name }: { name: string }) => {
        if (!image?.thumbnail) return null;

        return (
          <Image
            src={image?.thumbnail ?? "/"}
            alt={name}
            layout="fixed"
            width={24}
            height={24}
            className="rounded overflow-hidden"
          />
        );
      },
    },
    {
      title: t("table:table-item-icon"),
      dataIndex: "icon",
      key: "icon",
      align: "center",
      render: (icon: string) => {
        if (!icon) return null;
        return (
          <span className="flex items-center justify-center">
            {getIcon({
              iconList: categoriesIcon,
              iconName: icon,
              className: "w-5 h-5 max-h-full max-w-full",
            })}
          </span>
        );
      },
    },
    {
      title: t("table:table-item-slug"),
      dataIndex: "slug",
      key: "slug",
      align: "center",
      ellipsis: true,
      width: 150,
    },
    {
      title: t("table:table-item-group"),
      dataIndex: "type",
      key: "type",
      align: alignLeft,
      width: 120,
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
          editUrl={`${ROUTES.CATEGORIES}/${id}/edit`}
          deleteModalView="DELETE_CATEGORY"
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

export default CategoryList;
