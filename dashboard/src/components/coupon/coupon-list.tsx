import Pagination from "@components/ui/pagination";
import Image from "next/image";
import { Table } from "@components/ui/table";
import { CouponPaginator, SortOrder } from "@ts-types/generated";
import ActionButtons from "@components/common/action-buttons";
import { siteSettings } from "@settings/site.settings";
import { Attachment } from "@ts-types/generated";
import usePrice from "@utils/use-price";
import { ROUTES } from "@utils/routes";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

type IProps = {
  coupons: CouponPaginator | null | undefined;
  onPagination: (current: number) => void;
  onSort: (current: any) => void;
  onOrder: (current: string) => void;
};
const CouponList = ({ coupons, onPagination, onSort, onOrder }: IProps) => {
  const { data, paginatorInfo } = coupons!;
  const { t } = useTranslation();

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
      width: 64,
    },
    {
      title: t("table:table-item-banner"),
      dataIndex: "image",
      key: "image",
      width: 74,
      render: (image: Attachment) => (
        <Image
          src={image?.thumbnail ?? siteSettings.product.placeholder}
          alt="coupon banner"
          layout="fixed"
          width={42}
          height={42}
          className="rounded overflow-hidden"
        />
      ),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-code")}
          ascending={
            sortingObj.sort === SortOrder.Asc && sortingObj.column === "code"
          }
          isActive={sortingObj.column === "code"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "code",
      key: "code",
      align: "center",
      onHeaderCell: () => onHeaderClick("code"),
      render: (text: string) => (
        <span className="whitespace-nowrap">{text}</span>
      ),
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
      align: "center",
      width: 132,
      onHeaderCell: () => onHeaderClick("amount"),
      render: (amount: number, record: any) => {
        const { price } = usePrice({
          amount: amount,
        });
        if (record.type === "PERCENTAGE_COUPON") {
          return <span>{amount}%</span>;
        }
        return <span>{price}</span>;
      },
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-active")}
          ascending={
            sortingObj.sort === SortOrder.Asc &&
            sortingObj.column === "active_from"
          }
          isActive={sortingObj.column === "active_from"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "active_from",
      key: "active_from",
      align: "center",
      onHeaderCell: () => onHeaderClick("active_from"),
      render: (active_date: string) => (
        <span className="whitespace-nowrap">
          {dayjs().to(dayjs.utc(active_date).tz(dayjs.tz.guess()))}
        </span>
      ),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-expired")}
          ascending={
            sortingObj.sort === SortOrder.Asc &&
            sortingObj.column === "expire_at"
          }
          isActive={sortingObj.column === "expire_at"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "expire_at",
      key: "expire_at",
      align: "center",
      onHeaderCell: () => onHeaderClick("expire_at"),
      render: (expired_date: string) => (
        <span className="whitespace-nowrap">
          {dayjs().to(dayjs.utc(expired_date).tz(dayjs.tz.guess()))}
        </span>
      ),
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: "center",
      render: (id: string) => (
        <ActionButtons
          id={id}
          editUrl={`${ROUTES.COUPONS}/edit/${id}`}
          deleteModalView="DELETE_COUPON"
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
          data={data}
          rowKey="id"
          scroll={{ x: 900 }}
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

export default CouponList;
