import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import {
  Attribute,
  Shop,
  QueryAttributesOrderByColumn,
  SortOrder,
} from "__generated__/__types__";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  attributes: Attribute[] | undefined;
  refetch: Function;
};
const AttributeList = ({ attributes, refetch }: IProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { alignLeft, alignRight } = useIsRTL();

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
      }, 500),
    [order]
  );

  const onHeaderClick = (value: string | undefined) => ({
    onClick: () => {
      debouncedHeaderClick(value);
    },
  });

  let columns = [
    {
      title: t("table:table-item-id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 60,
    },
    {
      // title: t("table:table-item-title"),
      title: (
        <TitleWithSort
          title={t("table:table-item-title")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryAttributesOrderByColumn.Name
          }
          isActive={column === QueryAttributesOrderByColumn.Name}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      onHeaderCell: () => onHeaderClick(QueryAttributesOrderByColumn.Name),
      render: (name: any) => <span className="whitespace-nowrap">{name}</span>,
    },
    {
      title: t("table:table-item-shop"),
      dataIndex: "shop",
      key: "shop",
      width: 120,
      align: "center",
      ellipsis: true,
      render: (shop: Shop) => (
        <span className="whitespace-nowrap truncate">{shop?.name}</span>
      ),
    },
    {
      title: t("table:table-item-values"),
      dataIndex: "values",
      key: "values",
      align: alignLeft,
      render: (values: any) => {
        return (
          <span className="whitespace-nowrap">
            {values.map((singleValues: any, index: number) => {
              return index > 0
                ? `, ${singleValues.value}`
                : `${singleValues.value}`;
            })}
          </span>
        );
      },
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: alignRight,
      render: (id: string) => (
        <ActionButtons
          id={id}
          editUrl={`${router.asPath}/${id}/edit`}
          deleteModalView="DELETE_ATTRIBUTE"
        />
      ),
    },
  ];

  if (router?.query?.shop) {
    columns = columns?.filter((column) => column?.key !== "shop");
  }

  return (
    <div className="rounded overflow-hidden shadow mb-8">
      <Table
        // @ts-ignore
        columns={columns}
        emptyText={t("table:empty-table-data")}
        data={attributes}
        rowKey="id"
        scroll={{ x: 380 }}
      />
    </div>
  );
};

export default AttributeList;
