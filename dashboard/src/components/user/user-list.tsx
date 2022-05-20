import Pagination from "@components/ui/pagination";
import Image from "next/image";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { siteSettings } from "@settings/site.settings";
import { useMeQuery } from "@graphql/me.graphql";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import {
  UserPaginator,
  SortOrder,
  QueryUsersOrderByColumn,
} from "__generated__/__types__";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

type IProps = {
  customers: UserPaginator | null | undefined;
  onPagination: (current: number) => void;
  refetch: Function;
};

const UsersList = ({ customers, onPagination, refetch }: IProps) => {
  const { data, paginatorInfo } = customers!;
  const { t } = useTranslation();
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

  const columns = [
    {
      title: t("table:table-item-avatar"),
      dataIndex: "profile",
      key: "profile",
      align: "center",
      width: 74,
      render: (profile: any, record: any) => (
        <Image
          src={profile?.avatar?.thumbnail ?? siteSettings.avatar.placeholder}
          alt={record?.name}
          layout="fixed"
          width={42}
          height={42}
          className="rounded overflow-hidden"
        />
      ),
    },
    {
      title: t("table:table-item-title"),
      dataIndex: "name",
      key: "name",
      align: alignLeft,
    },
    {
      title: t("table:table-item-email"),
      dataIndex: "email",
      key: "email",
      align: alignLeft,
    },
    {
      title: t("table:table-item-permissions"),
      dataIndex: "permissions",
      key: "permissions",
      align: "center",
      render: (permissions: any, record: any) => {
        return (
          <div>
            {permissions?.map(({ name }: { name: string }) => name).join(", ")}
          </div>
        );
      },
    },
    {
      title: t("table:table-item-available_wallet_points"),
      dataIndex: ["wallet", "available_points"],
      key: "available_wallet_points",
      align: "center",
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-status")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryUsersOrderByColumn.IsActive
          }
          isActive={column === QueryUsersOrderByColumn.IsActive}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "is_active",
      key: "is_active",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryUsersOrderByColumn.IsActive),
      render: (is_active: boolean) =>
        is_active ? t("common:text-active") : t("common:text-inactive"),
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: alignRight,
      render: (id: string, { is_active }: any) => {
        const { data: currentUser } = useMeQuery();
        return (
          <>
            {currentUser?.me?.id !== id && (
              <ActionButtons
                id={id}
                userStatus={true}
                isUserActive={is_active}
                showAddWalletPoints={true}
                showMakeAdminButton={true}
              />
            )}
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        <Table
          // @ts-ignore
          columns={columns}
          emptyText={t("table:empty-table-data")}
          data={data}
          rowKey="id"
          scroll={{ x: 800 }}
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

export default UsersList;
