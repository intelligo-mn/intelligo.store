import Pagination from "@components/ui/pagination";
import Image from "next/image";
import { Table, AlignType } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { siteSettings } from "@settings/site.settings";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/router";

import TitleWithSort from "@components/ui/title-with-sort";

import { Switch } from "@headlessui/react";
import { Attachment, AuthorPaginator, SortOrder } from "@ts-types/generated";
import { useUpdateAuthorMutation } from "@data/author/use-author-update.mutation";

type IProps = {
  authors: AuthorPaginator | null | undefined;
  onPagination: (current: number) => void;
  onSort: (current: any) => void;
  onOrder: (current: string) => void;
};

const AuthorList = ({ authors, onPagination, onSort, onOrder }: IProps) => {
  const { data, paginatorInfo } = authors!;
  const { t } = useTranslation();
  const router = useRouter();

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
            sortingObj.sort === SortOrder.Asc && sortingObj.column === "name"
          }
          isActive={sortingObj.column === "name"}
        />
      ),
      dataIndex: "name",
      key: "name",
      align: "center" as AlignType,
      onHeaderCell: () => onHeaderClick("name"),
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
        const { mutate: updateAuthor, isLoading: updating } =
          useUpdateAuthorMutation();
        function handleOnClick() {
          updateAuthor({
            variables: {
              input: {
                id: record?.id,
                name: record?.name,
                is_approved: !is_approved,
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
                } inline-block w-4 h-4 transition-transform transform bg-light rounded-full`}
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
          editUrl={`${ROUTES.AUTHORS}/${record.slug}/edit`}
          deleteModalView="DELETE_AUTHOR"
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

export default AuthorList;
