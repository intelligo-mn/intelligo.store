import Pagination from "@components/ui/pagination";
import Image from "next/image";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { siteSettings } from "@settings/site.settings";
import { UserPaginator, SortOrder } from "@ts-types/generated";
import { useMeQuery } from "@data/user/use-me.query";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import { useState } from "react";
import Badge from "@components/ui/badge/badge";

type IProps = {
  customers: UserPaginator | null | undefined;
  onPagination: (current: number) => void;
  onSort: (current: any) => void;
  onOrder: (current: string) => void;
};
const CustomerList = ({ customers, onPagination, onSort, onOrder }: IProps) => {
  const { data, paginatorInfo } = customers!;
  const { t } = useTranslation();
  const { alignLeft } = useIsRTL();

  const [sortingObj, setSortingObj] = useState<{
    sort: SortOrder;
    column: any | null;
  }>({
    sort: SortOrder.Desc,
    column: null,
  });

  const onHeaderClick = (column: any | null) => ({
    onClick: () => {
      onSort((currentSortDirection: SortOrder) =>
        currentSortDirection === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc
      );

      onOrder(column);

      setSortingObj({
        sort:
          sortingObj.sort === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,
        column: column,
      });
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
      title: t("table:table-item-status"),
      dataIndex: "is_active",
      key: "is_active",
      align: "center",
      render: (is_active: boolean) => (
        <Badge
          textKey={is_active ? "common:text-active" : "common:text-inactive"}
          color={is_active ? "bg-accent" : "bg-red-500"}
        />
      ),
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: "center",
      render: (id: string, { is_active }: any) => {
        const { data } = useMeQuery();
        return (
          <>
            {data?.id != id && (
              <ActionButtons
                id={id}
                userStatus={true}
                isUserActive={is_active}
                showAddWalletPoints={false}
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

export default CustomerList;
