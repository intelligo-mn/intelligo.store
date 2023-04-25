import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import { SortOrder, Type } from "@ts-types/generated";
import { getIcon } from "@utils/get-icon";
import * as typeIcons from "@components/icons/type";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import { useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";
import Image from "next/image";
import Pagination from "@components/ui/pagination";
import { TypesPaginator } from "@data/type/use-types.query";

export type IProps = {
	types: TypesPaginator | undefined | null;
	onPagination: (key: number) => void;
	onSort: (current: any) => void;
	onOrder: (current: string) => void;
};

const TypeList = ({ types, onSort, onOrder, onPagination }: IProps) => {
	const { t } = useTranslation();
	const { data, paginatorInfo } = types!;
	const { alignLeft, alignRight } = useIsRTL();

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
			render: (id: any) => <span className="whitespace-nowrap">{id}</span>,
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
			onHeaderCell: () => onHeaderClick("name"),
			render: (name: any) => <span className="whitespace-nowrap">{name}</span>,
		},

		{
			title: t("table:table-item-image"),
			dataIndex: "images",
			key: "image",
			align: "center",
			render: (images: any) => {
				if (!images?.length) return null;

				return (
					<div className="flex justify-center items-center flex-row gap-x-2">
						{images.map((item: any) => {
							return item?.image?.map((image: any, index: number) => (
								<Image
									src={image?.original ?? "/"}
									alt={`brand-image-${image.id}`}
									layout="fixed"
									width={40}
									height={40}
									className="rounded-lg overflow-hidden bg-gray-300 object-contain"
									key={`brand-image-${index}`}
								/>
							));
						})}
					</div>
				);
			},
		},

		{
			title: t("table:table-item-icon"),
			dataIndex: "icon",
			key: "slug",
			align: "center",
			render: (icon: string) => {
				if (!icon) return null;
				return (
					<span className="flex items-center justify-center">
						{getIcon({
							iconList: typeIcons,
							iconName: icon,
							className: "w-5 h-5 max-h-full max-w-full",
						})}
					</span>
				);
			},
		},
		{
			title: t("table:table-item-actions"),
			dataIndex: "slug",
			key: "actions",
			align: alignRight,
			render: (id: string, record: Type) => (
				<ActionButtons
					id={record.id}
					editUrl={`${ROUTES.BRANDS}/${id}/edit`}
					deleteModalView="DELETE_TYPE"
				/>
			),
		},
	];

	return (
		<>
			<div className="rounded overflow-hidden shadow mb-8">
				<Table
					//@ts-ignore
					columns={columns}
					emptyText={t("table:empty-table-data")}
					data={data}
					rowKey="id"
					scroll={{ x: 380 }}
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

export default TypeList;
