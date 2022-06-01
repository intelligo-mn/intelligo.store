import Scrollbar from "@components/common/scrollbar";
import { useUI } from "@contexts/ui.context";
import { IoArrowBack } from "@react-icons/all-files/io5/IoArrowBack";
import { IoArrowForward } from "@react-icons/all-files/io5/IoArrowForward";
import { useTranslation } from "next-i18next";
import { getDirection } from "@utils/get-direction";
import { useRouter } from "next/router";
import { CollectionFilters } from "./collection-filters";

const CollectionFilterSidebar = () => {
	const { closeFilter } = useUI();
	const router = useRouter();
	const { t } = useTranslation("common");
	const dir = getDirection(router.locale);
	return (
		<div className="flex flex-col justify-between w-full h-full">
			<div className="w-full border-b border-gray-100 flex justify-between items-center relative ltr:pr-5 ltr:md:pr-7 rtl:pl-5 rtl:md:pl-7 flex-shrink-0 py-0.5">
				<button
					className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
					onClick={closeFilter}
					aria-label="close"
				>
					{dir === "rtl" ? (
						<IoArrowForward className="text-black" />
					) : (
						<IoArrowBack className="text-black" />
					)}
				</button>
				<h2 className="font-bold text-xl md:text-2xl m-0 text-heading w-full text-center ltr:pr-6 rtl:pl-6">
					{t("text-collections")}
				</h2>
			</div>

			<Scrollbar className="menu-scrollbar flex-grow mb-auto">
				<div className="flex flex-col py-7 px-5 md:px-7 text-heading">
					<CollectionFilters />
				</div>
			</Scrollbar>

			<div className="text-sm md:text-base leading-4 flex items-center justify-center px-7 flex-shrink-0 h-14 bg-heading text-white">
				9,608 {t("text-items")}
			</div>
		</div>
	);
};

export default CollectionFilterSidebar;
