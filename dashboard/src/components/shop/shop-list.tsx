import Pagination from "@components/ui/pagination";
import Image from "next/image";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { siteSettings } from "@settings/site.settings";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import Badge from "@components/ui/badge/badge";
import { ShopPaginator, SortOrder } from "__generated__/__types__";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";
import Link from "@components/ui/link";

type IProps = {
  shops: ShopPaginator | null | undefined;
  onPagination: (current: number) => void;
  refetch: Function;
};

const ShopList = ({ shops, onPagination, refetch }: IProps) => {
  const { data, paginatorInfo } = shops! ?? {};
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

  const columns = [
    {
      title: t("table:table-item-logo"),
      dataIndex: "logo",
      key: "logo",
      align: "center",
      width: 74,
      render: (logo: any, record: any) => (
        <Image
          src={logo?.thumbnail ?? siteSettings.product.placeholder}
          alt={record?.name}
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
          title={t("table:table-item-title")}
          ascending={order === SortOrder.Asc && column === "name"}
          isActive={column === "name"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      onHeaderCell: () => onHeaderClick("name"),
      render: (name: any, { slug }: any) => (
        <Link href={`/${slug}`}>
          <span className="whitespace-nowrap">{name}</span>
        </Link>
      ),
    },
    {
      title: t("table:table-item-owner-name"),
      dataIndex: "owner",
      key: "owner",
      align: "center",
      render: (owner: any) => owner.name,
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-total-products")}
          ascending={order === SortOrder.Asc && column === "products_count"}
          isActive={column === "products_count"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "products_count",
      key: "products_count",
      align: "center",
      onHeaderCell: () => onHeaderClick("products_count"),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-total-orders")}
          ascending={order === SortOrder.Asc && column === "orders_count"}
          isActive={column === "orders_count"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "orders_count",
      key: "orders_count",
      align: "center",
      onHeaderCell: () => onHeaderClick("orders_count"),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-status")}
          ascending={order === SortOrder.Asc && column === "is_active"}
          isActive={column === "is_active"}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "is_active",
      key: "is_active",
      align: "center",
      onHeaderCell: () => onHeaderClick("is_active"),
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
      align: alignRight,
      render: (id: string, { slug, is_active }: any) => {
        return (
          <ActionButtons
            id={id}
            approveButton={true}
            detailsUrl={`/${slug}`}
            isShopActive={is_active}
          />
        );
      },
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

export default ShopList;
