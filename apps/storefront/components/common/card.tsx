import Link from "@components/ui/link";
import Image from "next/image";
import Text from "@components/ui/text";
import { FaLink } from "@react-icons/all-files/fa/FaLink";
import { LinkProps } from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
// import { filterBrandImages } from "@lib/filter-brands";
import { Attachment } from "@framework/types";

interface Props {
	item: any;
	variant?: "rounded" | "circle" | "modern" | "elegant";
	// size?: "small" | "medium" | "big";
	effectActive?: boolean;
	effectPosition?: "imageOnly" | "fullBody";
	href: LinkProps["href"];
  image?: Attachment | null;
}

const Card: React.FC<Props> = ({
	item,
	variant = "circle",
	// size = "small",
	effectActive = false,
	effectPosition = "imageOnly",
	href,
  image
}) => {
	const { name, products_count } = item ?? {};
	const imageSize:any = (variant === "circle" && 180) || (variant === "rounded" && 198) || (variant === "modern" && 99) || (variant === "elegant" && 48);

	let size = "small";
	if (variant === "circle" || variant === "elegant") {
		size = "small";
	} else if (variant === "rounded") {
		size = "medium";
	} else if (variant === "modern") {
		size = "big";
	} else {
		size = "small"
	}

	const placeholderImage = `/assets/placeholder/card-${size}.svg`;
	const { t } = useTranslation("common");

  	// const image = item?.image?.original ?? filterBrandImages(item?.images, "slider-layout")?.image?.[0]?.original ?? placeholderImage;

  	return (
		<Link
			href={href}
			className={`group flex justify-center ${variant === "elegant" ? "text-left rounded-lg px-6 lg:px-8 pt-7 lg:pt-10 pb-5 lg:pb-8 bg-gray-200" : "text-center"} flex-col relative ${variant === "modern" ? "lg:h-60 md:h-48 h-44 w-full bg-gray-200 rounded-md" : ""}`}
		>
			<div
				className={`relative inline-flex ${variant === "elegant" ? "" : " mx-auto " } ${
					(["rounded", "modern", "elegant"].includes(variant) && "rounded-md") || (variant === "circle" && "rounded-full")
				} ${variant !== "modern" ? " mb-3.5 md:mb-4 lg:mb-5 xl:mb-6" : " xl:mb-8 md:mb-4"}`}
			>
				<div className="flex">
					<Image
						src={image?.original ?? placeholderImage}
						alt={name || t("text-card-thumbnail")}
						width={imageSize}
						height={imageSize}
						quality={100}
						className={`${
							(["rounded", "modern", "elegant"].includes(variant) ? "rounded-md" : "") || (variant === "circle" && "rounded-full")
						} ${["elegant", "modern"].includes(variant) ? "object-contain" : "object-cover bg-gray-300"}`}
					/>
				</div>
				{(effectActive === true && effectPosition === "imageOnly") && (
					<>
						<div
							className={`absolute top-0 left-0 bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 ${
								(["rounded", "modern", "elegant"].includes(variant) && "rounded-md") || (variant === "circle" && "rounded-full")
							}`}
						/>
						<div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
							<FaLink className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl transform opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
						</div>
					</>
				)}
			</div>
			{variant === "modern" ? 
				<Text variant="heading" className="text-heading text-sm md:text-base xl:text-lg font-semibold capitalize absolute text-center bottom-4 sm:bottom-5 md:bottom-6 xl:bottom-8 inset-x-0 z-10">
					{name}
				</Text>
			:
				<Text variant="heading" className="capitalize">
					{name}
				</Text>
			}
			{variant === "elegant" ? 
				<Text
					className='text-body text-sm sm:leading-6 leading-7 pb-0.5 truncate'
				>
					{products_count} {products_count > 1 || products_count === 0 ? t("text-products") : t("text-product")}
				</Text>
				:
				""
			}
			{(effectActive === true && effectPosition === "fullBody") && (
				<>
					<div
						className={`absolute top-0 left-0 bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 ${
							(["rounded", "modern", "elegant"].includes(variant) && "rounded-md") || (variant === "circle" && "rounded-full")
						}`}
					/>
					<div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
						<FaLink className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl transform opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
					</div>
				</>
			)}
		</Link>
	);
};

export default Card;
