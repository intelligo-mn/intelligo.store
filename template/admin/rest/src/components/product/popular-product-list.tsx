import { Table } from "@components/ui/table";
import { Product, Shop, ProductType } from "@ts-types/generated";
import usePrice from "@utils/use-price";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";

export type IProps = {
  products: Product[] | null | undefined;
  title?: string;
};

const PopularProductList = ({ products, title }: IProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { alignLeft, alignRight } = useIsRTL();

  let columns = [
    {
      title: t("table:table-item-id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 64,
    },
    {
      title: t("table:table-item-title"),
      dataIndex: "name",
      key: "name",
      align: alignLeft,
      width: 200,
      render: (name: string) => (
        <span className="whitespace-nowrap">{name}</span>
      ),
    },
    {
      title: t("table:table-item-group"),
      dataIndex: "type",
      key: "type",
      align: "center",
      width: 120,
      render: (type: any) => (
        <span className="whitespace-nowrap">{type?.name}</span>
      ),
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
      title: t("table:table-item-unit"),
      dataIndex: "price",
      key: "price",
      align: alignRight,
      width: 160,
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
      title: t("table:table-item-quantity"),
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      width: 80,
    },
  ];

  if (router?.query?.shop) {
    columns = columns?.filter((column) => column?.key !== "shop");
  }

  return (
    <div className="rounded overflow-hidden shadow mb-6">
      <h3 className="text-heading text-center font-semibold px-4 py-3 bg-light border-b border-border-200">
        {title}
      </h3>
      <Table
        //@ts-ignore
        columns={columns}
        emptyText={t("table:empty-table-data")}
        //@ts-ignore
        data={products}
        rowKey="id"
        scroll={{ x: 700 }}
      />
    </div>
  );
};

export default PopularProductList;
