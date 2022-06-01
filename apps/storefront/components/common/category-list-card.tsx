import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { ROUTES } from "@lib/routes";
import { Category } from "@framework/types";
import { useTranslation } from "next-i18next";
import React from "react";
import { getCategoryTypeImage } from "@lib/get-category-type-image";

interface Props {
	category: Category;
}

const CategoryListCard: React.FC<Props> = ({ category }) => {
  const { name } = category;
	const { t } = useTranslation("common");

  const parsedImage = getCategoryTypeImage(category);

	return (
		<Link href={`${ROUTES.CATEGORY}/${category.slug}`}>
			<a className="flex justify-between items-center bg-gray-200 rounded-md px-5 2xl:px-3.5 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3.5 transition hover:bg-gray-100">
				<div className="flex items-center">
					<div className="inline-flex flex-shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto">
						<Image
							src={parsedImage?.original ?? "/assets/placeholder/category-small.svg"}
							alt={name || t("text-category-thumbnail")}
							width={60}
							height={60}
							className="bg-gray-300 object-cover rounded-full"
						/>
					</div>
					<h3 className="text-sm md:text-base 2xl:text-sm 3xl:text-base text-heading capitalize ltr:pl-2.5 ltr:md:pl-4 ltr:2xl:pl-3 ltr:3xl:pl-4 rtl:pr-2.5 rtl:md:pr-4 rtl:2xl:pr-3 rtl:3xl:pr-4">
						{name}
					</h3>
				</div>
				<div className="flex items-center">
					<div className="text-xs font-medium w-5 h-5 flex flex-shrink-0 justify-center items-center bg-gray-350 rounded ltr:2xl:mr-2 rtl:2xl:ml-2">
            {category?.products_count ?? 0}
					</div>
					<IoIosArrowForward className="hidden 2xl:block text-sm text-heading" />
				</div>
			</a>
		</Link>
	);
};

export default CategoryListCard;
