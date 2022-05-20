import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { getIcon } from "@utils/get-icon";
import * as typeIcons from "@components/icons/type";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import {
  Type,
  QueryTypesOrderByColumn,
  SortOrder,
} from "@common/generated-types";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  types: Type[] | undefined;
  refetch: Function;
};

const GroupsList = ({ types, refetch }: IProps) => {
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
      }, 500),
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
            order === SortDirection.ASCENDING && column === QueryTypesOrderByColumn.Name
          }
          isActive={column === QueryTypesOrderByColumn.Name}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      onHeaderCell: () => onHeaderClick(QueryTypesOrderByColumn.Name),
      render: (name: any) => <span className="whitespace-nowrap">{name}</span>,
    },
    {
      title: t("table:table-item-icon"),
      dataIndex: "icon",
      key: "slug",
      align: "center",
      render: (icon: string) => {
        if (!icon) return null;
        return (
          <span className="flex items-center justify-center">
            {getIcon({
              iconList: typeIcons,
              iconName: icon,
              className: "w-5 h-5 max-h-full max-w-full",
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
          editUrl={`${ROUTES.GROUPS}/${id}/edit`}
          deleteModalView="DELETE_TYPE"
        />
      ),
    },
  ];

  return (
    <div className="rounded overflow-hidden shadow mb-8">
      {/* @ts-ignore */}
      <Table
        columns={columns}
        emptyText={t("table:empty-table-data")}
        data={types}
        rowKey="id"
        scroll={{ x: 380 }}
      />
    </div>
  );
};

export default GroupsList;
