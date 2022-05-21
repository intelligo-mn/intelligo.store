import Pagination from "@components/ui/pagination";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import usePrice from "@utils/use-price";
import { adminOnly, getAuthCredentials, hasAccess } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";
import { Shop, SortOrder, WithdrawPaginator } from "@ts-types/generated";
import { useRouter } from "next/router";
import Badge from "@components/ui/badge/badge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";

type IProps = {
  withdraws: WithdrawPaginator | null | undefined;
  onPagination: (current: number) => void;
  onSort: (current: any) => void;
  onOrder: (current: string) => void;
};

const WithdrawList = ({ withdraws, onPagination, onSort, onOrder }: IProps) => {
  const { t } = useTranslation();
  const { alignLeft } = useIsRTL();

  const router = useRouter();

  const renderStatusBadge = (status: string) => {
    switch (status.toUpperCase()) {
      case "APPROVED":
        return <Badge text={t("text-approved")} color="bg-accent" />;
      case "PENDING":
        return <Badge text={t("text-pending")} color="bg-purple-500" />;
      case "ON_HOLD":
        return <Badge text={t("text-on-hold")} color="bg-pink-500" />;
      case "REJECTED":
        return <Badge text={t("text-rejected")} color="bg-red-500" />;
      case "PROCESSING":
        return <Badge text={t("text-processing")} color="bg-yellow-500" />;
    }
  };

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

  let columns = [
    {
      title: t("table:table-item-shop-name"),
      dataIndex: "shop",
      key: "shop",
      align: alignLeft,
      render: (shop: Shop) => shop.name,
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-amount")}
          ascending={
            sortingObj.sort === SortOrder.Asc && sortingObj.column === "amount"
          }
          isActive={sortingObj.column === "amount"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "amount",
      key: "amount",
      align: "right",
      onHeaderCell: () => onHeaderClick("amount"),
      render: (amount: number) => {
        const { price } = usePrice({
          amount: amount as number,
        });
        return <div>{price}</div>;
      },
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-status")}
          ascending={
            sortingObj.sort === SortOrder.Asc && sortingObj.column === "status"
          }
          isActive={sortingObj.column === "status"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "status",
      key: "status",
      align: "center",
      onHeaderCell: () => onHeaderClick("status"),
      render: (status: string) => renderStatusBadge(status),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-created-at")}
          ascending={
            sortingObj.sort === SortOrder.Asc &&
            sortingObj.column === "created_at"
          }
          isActive={sortingObj.column === "created_at"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
      onHeaderCell: () => onHeaderClick("created_at"),
      render: (date: string) => {
        dayjs.extend(relativeTime);
        dayjs.extend(utc);
        dayjs.extend(timezone);
        return (
          <span className="whitespace-nowrap">
            {dayjs.utc(date).tz(dayjs.tz.guess()).fromNow()}
          </span>
        );
      },
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: "center",
      render: (id: string) => {
        const { permissions } = getAuthCredentials();
        if (hasAccess(adminOnly, permissions)) {
          return (
            <ActionButtons detailsUrl={`${ROUTES.WITHDRAWS}/${id}`} id={id} />
          );
        }
        return null;
      },
    },
  ];
  if (router?.query?.shop) {
    columns = columns?.filter((column) => column?.key !== "actions");
  }
  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        <Table
          //@ts-ignore
          columns={columns}
          emptyText={t("table:empty-table-data")}
          data={withdraws?.data}
          rowKey="id"
          scroll={{ x: 800 }}
        />
      </div>

      {!!withdraws?.paginatorInfo.total && (
        <div className="flex justify-end items-center">
          <Pagination
            total={withdraws?.paginatorInfo.total}
            current={withdraws?.paginatorInfo.currentPage}
            pageSize={withdraws?.paginatorInfo.perPage}
            onChange={onPagination}
          />
        </div>
      )}
    </>
  );
};

export default WithdrawList;
