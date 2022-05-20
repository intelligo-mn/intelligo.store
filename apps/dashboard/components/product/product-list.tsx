import Pagination from "@components/ui/pagination";
import Image from "next/image";
import { Table, AlignType } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { siteSettings } from "@settings/site.settings";
import usePrice from "@utils/use-price";
import { useRouter } from "next/router";
import Badge from "@components/ui/badge/badge";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import {
  Product,
  ProductPaginator,
  ProductType,
  Shop,
  QueryProductsOrderByColumn,
  SortOrder,
} from "__generated__/__types__";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
  products: ProductPaginator | null | undefined;
  onPagination: (current: number) => void;
  refetch: Function;
};

const ProductList = ({ products, onPagination, refetch }: IProps) => {
  const { data, paginatorInfo } = products!;
  const router = useRouter();
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

  let columns = [
    {
      title: t("table:table-item-image"),
      dataIndex: "image",
      key: "image",
      align: alignLeft as AlignType,
      width: 74,
      render: (image: any, { name }: { name: string }) => (
        <Image
          src={image?.thumbnail ?? siteSettings.product.placeholder}
          alt={name}
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
          ascending={
            order === SortOrder.Asc &&
            column === QueryProductsOrderByColumn.Name
          }
          isActive={column === QueryProductsOrderByColumn.Name}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "name",
      key: "name",
      align: alignLeft as AlignType,
      width: 200,
      ellipsis: true,
      onHeaderCell: () => onHeaderClick(QueryProductsOrderByColumn.Name),
    },
    {
      title: t("table:table-item-group"),
      dataIndex: "type",
      key: "type",
      width: 120,
      align: "center" as AlignType,
      render: (type: any) => (
        <span className="whitespace-nowrap truncate">{type?.name}</span>
      ),
    },
    {
      title: t("table:table-item-shop"),
      dataIndex: "shop",
      key: "shop",
      width: 120,
      align: "center" as AlignType,
      ellipsis: true,
      render: (shop: Shop) => (
        <span className="whitespace-nowrap truncate">{shop?.name}</span>
      ),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-unit")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryProductsOrderByColumn.Price
          }
          isActive={column === QueryProductsOrderByColumn.Price}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "price",
      key: "price",
      align: alignRight as AlignType,
      width: 180,
      onHeaderCell: () => onHeaderClick(QueryProductsOrderByColumn.Price),
      render: (value: number, record: Product) => {
        if (record?.product_type === ProductType.Variable) {
          const { price: max_price } = usePrice({
            amount: record?.max_price as number,
          });
          const { price: min_price } = usePrice({
            amount: record?.min_price as number,
          });
          return (
            <span
              className="whitespace-nowrap"
              title={`${min_price} - ${max_price}`}
            >{`${min_price} - ${max_price}`}</span>
          );
        } else {
          const { price } = usePrice({
            amount: value,
          });
          return (
            <span className="whitespace-nowrap" title={price}>
              {price}
            </span>
          );
        }
      },
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-quantity")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryProductsOrderByColumn.Quantity
          }
          isActive={column === QueryProductsOrderByColumn.Quantity}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "quantity",
      key: "quantity",
      align: "center" as AlignType,
      width: 100,
      onHeaderCell: () => onHeaderClick(QueryProductsOrderByColumn.Quantity),
    },
    {
      title: (
        <TitleWithSort
          title={t("table:table-item-status")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryProductsOrderByColumn.Status
          }
          isActive={column === QueryProductsOrderByColumn.Status}
        />
      ),
      className: "cursor-pointer",
      dataIndex: "status",
      key: "status",
      align: "center" as AlignType,
      width: 100,
      onHeaderCell: () => onHeaderClick(QueryProductsOrderByColumn.Status),
      render: (status: string) => (
        <Badge
          text={status}
          color={status === "DRAFT" ? "bg-yellow-400" : "bg-accent"}
        />
      ),
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: "center" as AlignType,
      width: 80,
      render: (id: string) => (
        <ActionButtons
          id={id}
          editUrl={`${router.asPath}/${id}/edit`}
          deleteModalView="DELETE_PRODUCT"
        />
      ),
    },
  ];

  if (router?.query?.shop) {
    columns = columns?.filter((col) => col?.key !== "shop");
  }

  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
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
            showLessItems
          />
        </div>
      )}
    </>
  );
};

export default ProductList;
