import { useMemo, useState } from "react";
import Pagination from "@components/ui/pagination";
import Image from "next/image";
import { Table, AlignType } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { siteSettings } from "@settings/site.settings";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import debounce from "lodash/debounce";
import TitleWithSort from "@components/ui/title-with-sort";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";

import {
  Attachment,
  ManufacturerPaginator,
  QueryManufacturersOrderByColumn,
  SortOrder,
} from "__generated__/__types__";
import { useUpdateManufacturerMutation } from "@graphql/manufacturers.graphql";

type IProps = {
  manufacturers: ManufacturerPaginator | null | undefined;
  onPagination: (current: number) => void;
  refetch: Function;
};

const ManufacturerList = ({ manufacturers, onPagination, refetch }: IProps) => {
  const { data, paginatorInfo } = manufacturers!;
  const { t } = useTranslation();
  const router = useRouter();

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
      title: t("table:table-item-id"),
      dataIndex: "id",
      key: "id",
      align: "center" as AlignType,
      width: 64,
    },
    {
      title: t("table:table-item-image"),
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
          title={t("table:table-item-title")}
          ascending={
            order === SortOrder.Asc &&
            column === QueryManufacturersOrderByColumn.Name
          }
          isActive={column === QueryManufacturersOrderByColumn.Name}
        />
      ),
      dataIndex: "name",
      key: "name",
      align: "center" as AlignType,
      onHeaderCell: () => onHeaderClick(QueryManufacturersOrderByColumn.Name),
    },
    {
      title: t("table:table-item-products"),
      dataIndex: "products_count",
      key: "products_count",
      align: "center" as AlignType,
    },
    {
      title: t("table:table-item-approval-action"),
      dataIndex: "is_approved",
      key: "approve",
      align: "center" as AlignType,
      render: (is_approved: boolean, record: any) => {
        const [updateManufacturer, { loading: updating }] =
          useUpdateManufacturerMutation();
        function handleOnClick() {
          updateManufacturer({
            variables: {
              input: {
                id: record?.id,
                name: record?.name,
                is_approved: !is_approved,
                type_id: record?.type.id,
              },
            },
          });
        }
        return (
          <>
            <Switch
              checked={is_approved}
              onChange={handleOnClick}
              className={`${
                is_approved ? "bg-accent" : "bg-gray-300"
              } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none`}
            >
              <span className="sr-only">Enable</span>
              <span
                className={`${
                  is_approved ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-light rounded-full`}
              />
            </Switch>
          </>
        );
      },
    },
    {
      title: t("table:table-item-actions"),
      dataIndex: "id",
      key: "actions",
      align: "center" as AlignType,
      render: (id: string, record: any) => (
        <ActionButtons
          id={id}
          editUrl={`${ROUTES.MANUFACTURERS}/${record.slug}/edit`}
          deleteModalView="DELETE_MANUFACTURER"
        />
      ),
    },
  ];

  if (router?.query?.shop) {
    columns = columns?.filter(
      (col) => col?.key !== "approve" && col?.key !== "actions"
    );
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
          />
        </div>
      )}
    </>
  );
};

export default ManufacturerList;
