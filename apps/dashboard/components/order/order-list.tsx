import Pagination from "@components/ui/pagination";
import dayjs from "dayjs";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import usePrice from "@utils/use-price";
import { formatAddress } from "@utils/format-address";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
	Order,
	OrderPaginator,
	OrderStatus,
	SortOrder,
	UserAddress,
} from "@ts-types/generated";
import InvoicePdf from "./invoice-pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useIsRTL } from "@utils/locals";
import { useState } from "react";
import TitleWithSort from "@components/ui/title-with-sort";

type IProps = {
	orders: OrderPaginator | null | undefined;
	onPagination: (current: number) => void;
	onSort: (current: any) => void;
	onOrder: (current: string) => void;
};

const OrderList = ({ orders, onPagination, onSort, onOrder }: IProps) => {
	const { data, paginatorInfo } = orders! ?? {};
	const { t } = useTranslation();
	const rowExpandable = (record: any) => record.children?.length;
	const router = useRouter();
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
			title: t("table:table-item-tracking-number"),
			dataIndex: "tracking_number",
			key: "tracking_number",
			align: "center",
			width: 150,
		},
		{
			title: t("table:table-item-delivery-fee"),
			dataIndex: "delivery_fee",
			key: "delivery_fee",
			align: "center",
			render: (value: any) => {
				const delivery_fee = value ? value : 0;
				const { price } = usePrice({
					amount: delivery_fee,
				});
				return <span>{price}</span>;
			},
		},
		{
			title: (
				<TitleWithSort
					title={t("table:table-item-total")}
					ascending={
						sortingObj.sort === SortOrder.Asc && sortingObj.column === "total"
					}
					isActive={sortingObj.column === "total"}
				/>
			),
			className: "cursor-pointer",
			dataIndex: "total",
			key: "total",
			align: "center",
			width: 120,
			onHeaderCell: () => onHeaderClick("total"),
			render: (value: any) => {
				const { price } = usePrice({
					amount: value,
				});
				return <span className="whitespace-nowrap">{price}</span>;
			},
		},
		{
			title: (
				<TitleWithSort
					title={t("table:table-item-order-date")}
					ascending={
						sortingObj.sort === SortOrder.Asc &&
						sortingObj.column === "created_at"
					}
					isActive={sortingObj.column === "created_at"}
				/>
			),
			className: "cursor-pointer",
			dataIndex: "created_at",
			key: "created_at",
			align: "center",
			onHeaderCell: () => onHeaderClick("created_at"),
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
			title: (
				<TitleWithSort
					title={t("table:table-item-status")}
					ascending={
						sortingObj.sort === SortOrder.Asc && sortingObj.column === "status"
					}
					isActive={sortingObj.column === "status"}
				/>
			),
			className: "cursor-pointer",
			dataIndex: "status",
			key: "status",
			align: alignLeft,
			onHeaderCell: () => onHeaderClick("status"),
			render: (status: OrderStatus) => (
				<span
					className="whitespace-nowrap font-semibold"
					style={{ color: status?.color! }}
				>
					{status?.name}
				</span>
			),
		},
		{
			title: t("table:table-item-shipping-address"),
			dataIndex: "shipping_address",
			key: "shipping_address",
			align: alignLeft,
			render: (shipping_address: UserAddress) => (
				<div>{formatAddress(shipping_address)}</div>
			),
		},
		{
			// title: "Download",
			title: t("common:text-invoice"),
			dataIndex: "id",
			key: "download",
			align: "center",
			render: (_id: string, order: Order) => (
				<div className="block">
					<PDFDownloadLink
						document={<InvoicePdf order={order} />}
						fileName="invoice.pdf"
						className="break-normal"
					>
						{({ loading }: any) =>
							loading ? t("common:text-loading") : t("common:text-download")
						}
					</PDFDownloadLink>
				</div>
			),
		},
		{
			title: t("table:table-item-actions"),
			dataIndex: "id",
			key: "actions",
			align: "center",
			width: 100,
			render: (id: string) => (
				<ActionButtons id={id} detailsUrl={`${router.asPath}/${id}`} />
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

export default OrderList;
