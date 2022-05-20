import Pagination from "@components/ui/pagination";
import Image from "next/image";
import dayjs from "dayjs";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { siteSettings } from "@settings/site.settings";
import usePrice from "@utils/use-price";
import { ROUTES } from "@utils/routes";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useTranslation } from "next-i18next";
import {
  Attachment,
  CouponPaginator,
  SortOrder,
  QueryCouponsOrderByColumn,
} from "__generated__/__types__";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

type IProps = {
  coupons: CouponPaginator | null | undefined;
  onPagination: (current: number) => void;
  refetch: Function;
};

const CouponList = ({ coupons, onPagination, refetch }: IProps) => {
  const { data, paginatorInfo } = coupons!;
  const { t } = useTranslation();

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
            order === SortOrder.Asc && column === QueryCouponsOrderByColumn.Code
          }
          isActive={column === QueryCouponsOrderByColumn.Code}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "code",
      key: "code",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryCouponsOrderByColumn.Code),
      render: (text: string) => (
        <span className="whitespace-nowrap">{text}</span>
      ),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-amount")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryCouponsOrderByColumn.Amount
          }
          isActive={column === QueryCouponsOrderByColumn.Amount}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "amount",
      key: "amount",
      align: "center",
      width: 132,
      onHeaderCell: () => onHeaderClick(QueryCouponsOrderByColumn.Amount),
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
            order === SortOrder.Asc &&
            column === QueryCouponsOrderByColumn.CreatedAt
          }
          isActive={column === QueryCouponsOrderByColumn.CreatedAt}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "active_from",
      key: "active_from",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryCouponsOrderByColumn.CreatedAt),
      render: (date: string) => (
        <span className="whitespace-nowrap">
          {dayjs().to(dayjs.utc(date).tz(dayjs.tz.guess()))}
        </span>
      ),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-expired")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryCouponsOrderByColumn.ExpireAt
          }
          isActive={column === QueryCouponsOrderByColumn.ExpireAt}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "expire_at",
      key: "expire_at",
      align: "center",
      onHeaderCell: () => onHeaderClick(QueryCouponsOrderByColumn.ExpireAt),
      render: (date: string) => (
        <span className="whitespace-nowrap">
          {dayjs().to(dayjs.utc(date).tz(dayjs.tz.guess()))}
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
          editUrl={`${ROUTES.COUPONS}/${id}/edit`}
          deleteModalView="DELETE_COUPON"
        />
      ),
    },
  ];

  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        {/* @ts-ignore */}
        <Table
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
