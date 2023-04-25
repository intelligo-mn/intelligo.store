import Pagination from "@components/ui/pagination";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { ROUTES } from "@utils/routes";
import { Attachment, AttachmentInput, CategoryPaginator, SortOrder } from "@ts-types/generated";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import { useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";

export type IProps = {
	categories: CategoryPaginator | undefined | null;
	onPagination: (key: number) => void;
	onSort: (current: any) => void;
	onOrder: (current: string) => void;
};
const CategoryList = ({
	categories,
	onPagination,
	onSort,
	onOrder,
}: IProps) => {
	const { t } = useTranslation();
	const { data, paginatorInfo } = categories!;
	const rowExpandable = (record: any) => record.children?.length;

	const { alignLeft } = useIsRTL();

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
			width: 60,
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
			className: "cursor-pointer",
			dataIndex: "name",
			key: "name",
			align: alignLeft,
			width: 150,
			onHeaderCell: () => onHeaderClick("name"),
		},
		{
			title: t("table:table-item-details"),
			dataIndex: "details",
			key: "details",
			align: alignLeft,
			width: 350,
			render: (details: string) => {
				if (!details) return null;
				return <div className="truncate">{details}</div>;
			},
		},
		{
			title: t("table:table-item-image"),
			dataIndex: "image",
			key: "image",
			align: "center",

			render: (images: Attachment[]) => {
				if (!images?.length) return null;

        return (
          <div className="flex justify-center items-center flex-row gap-x-2">
            {images.map((image: Attachment, index) => (
              <Image
                src={image?.original ?? "/"}
                alt={`brand-image-${image.id}`}
                layout="fixed"
                width={40}
                height={40}
                className="rounded-lg overflow-hidden object-contain"
                key={`brand-image-${index}`}
              />
            ))}
          </div>
        );
			},
		},

		{
			title: t("table:table-item-slug"),
			dataIndex: "slug",
			key: "slug",
			align: "center",
			ellipsis: true,
			width: 150,
			render: (slug: any) => (
				<div
					className="whitespace-nowrap truncate overflow-hidden"
					title={slug}
				>
					{slug}
				</div>
			),
		},
		{
			title: t("table:table-item-actions"),
			dataIndex: "id",
			key: "actions",
			align: "center",
			width: 90,
			render: (id: string) => (
				<ActionButtons
					id={id}
					editUrl={`${ROUTES.CATEGORIES}/edit/${id}`}
					deleteModalView="DELETE_CATEGORY"
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
					scroll={{ x: 1000 }}
					expandable={{
						expandedRowRender: () => "",
						rowExpandable: rowExpandable,
					}}
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

export default CategoryList;
