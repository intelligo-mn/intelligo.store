import Pagination from "@components/ui/pagination";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import usePrice from "@utils/use-price";
import { adminOnly, getAuthCredentials, hasAccess } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";
import { useRouter } from "next/router";
import Badge from "@components/ui/badge/badge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Shop, SortOrder, WithdrawPaginator } from "__generated__/__types__";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

type IProps = {
  withdraws: WithdrawPaginator | null | undefined;
  onPagination?: (current: number) => void;
  refetch: Function;
};

const WithdrawList = ({ withdraws, onPagination, refetch }: IProps) => {
  const { data, paginatorInfo } = withdraws! ?? {};
  const { t } = useTranslation();
  const { alignLeft } = useIsRTL();

  const router = useRouter();

  const renderStatusBadge = (status: string) => {
    switch (status) {
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

  const [order, setOrder] = useState<SortOrder>(SortOrder.Desc);
  const [column, setColumn] = useState<string>();

  const debouncedHeaderClick = useMemo(
    () =>
      debounce((value) => {
        setColumn(value);
        setOrder(order === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc);
        refetch({
          sortedBy: order === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,
          orderBy: value,
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
          ascending={order === SortOrder.Asc && column === "amount"}
          isActive={column === "amount"}
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
          ascending={order === SortOrder.Asc && column === "status"}
          isActive={column === "status"}
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
          title={t("table:table-item-title")}
          ascending={order === SortOrder.Asc && column === "created-at"}
          isActive={column === "created-at"}
        />
      ),
      className: "cursor-pointer",
      onHeaderCell: () => onHeaderClick("created-at"),
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
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
          data={data}
          rowKey="id"
          scroll={{ x: 800 }}
        />
      </div>

      {!!paginatorInfo?.total && (
        <div className="flex justify-end items-center">
          <Pagination
            total={paginatorInfo?.total}
            current={paginatorInfo?.currentPage}
            pageSize={paginatorInfo?.perPage}
            onChange={onPagination}
          />
        </div>
      )}
    </>
  );
};

export default WithdrawList;
