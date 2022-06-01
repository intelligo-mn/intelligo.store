import { ShopFilters } from "@components/shop/filters";
import Scrollbar from "@components/common/scrollbar";
import { useUI } from "@contexts/ui.context";
import { IoArrowBack } from "@react-icons/all-files/io5/IoArrowBack";
import { IoArrowForward } from "@react-icons/all-files/io5/IoArrowForward";
import { useTranslation } from "next-i18next";
import { getDirection } from "@utils/get-direction";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  searchResultCount?: number;
};

const FilterSidebar: React.FC<Props> = ({ searchResultCount }) => {
  const { closeFilter } = useUI();
  const router = useRouter();
  const { t } = useTranslation("common");
  const dir = getDirection(router.locale);
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="w-full border-b border-gray-100 flex justify-between items-center relative ltr:pr-5 rtl:pl-5 ltr:md:pr-7 rtl:md:pl-7 flex-shrink-0 py-0.5">
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
        <h2 className="font-bold text-xl md:text-2xl m-0 text-heading w-full text-center ltr:pr-6 ltr:pl-6">
          {t("text-filters")}
        </h2>
      </div>

      <Scrollbar className="menu-scrollbar flex-grow mb-auto">
        <div className="flex flex-col py-7 px-5 md:px-7 text-heading">
          <ShopFilters />
        </div>
      </Scrollbar>

      <div className="text-sm md:text-base leading-4 flex items-center justify-center px-7 flex-shrink-0 h-14 bg-heading text-white">
        {searchResultCount ?? 0} {t("text-items")}
      </div>
    </div>
  );
};

export default FilterSidebar;
