import { useRouter } from "next/router";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import isEmpty from "lodash/isEmpty";

interface Props {
	itemKey: string;
	itemValue: string;
}

export const FilteredItem = ({ itemKey, itemValue }: Props) => {
	const router = useRouter();
	const { pathname, query } = router;

	function handleClose() {
		const currentItem = (query[itemKey]! as string)
			.split(",")
			.filter((i) => i !== itemValue);
		delete query[itemKey];
		router.push({
			pathname,
			query: {
				...query,
				...(!isEmpty(currentItem) ? { [itemKey]: currentItem.join(",") } : {}),
			},
		});
	}
	return (
		<div
			className="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
			onClick={handleClose}
		>
			{itemValue}
			<IoClose className="text-sm text-body ltr:ml-2 rtl:mr-2 flex-shrink-0 ltr:-mr-0.5 rtl:-ml-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" />
		</div>
	);
};
