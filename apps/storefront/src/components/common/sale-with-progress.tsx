import ProductCard from "@components/product/product-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import ProductFlashSaleGridLoader from "@components/ui/loaders/product-flash-sale-grid-loader";
import ProductFlashSaleLoader from "@components/ui/loaders/product-flash-sale-loader";
import ProgressCard from "@components/common/progress-card";
import SectionHeader from "@components/common/section-header";
import Alert from "@components/ui/alert";
import { Product } from "@framework/types";
import React from "react";

interface Props {
	products: Product[];
	loading: boolean;
	imgWidth?: number;
	imgHeight?: number;
	className?: string;
	error?: string;
	productVariant?: "list" | "gridSlim";
	carouselBreakpoint?: {} | any;
}

const breakpoints = {
	"1441": {
		slidesPerView: 1,
	},
	"768": {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 1,
		spaceBetween: 12,
	},
};

const SellWithProgress: React.FC<Props> = ({
	products,
	loading,
	error,
	className = "",
	productVariant = "list",
	imgWidth = 210,
	imgHeight = 210,
	carouselBreakpoint,
}) => {
	return (
		<div
			className={`flex flex-col border border-gray-300 rounded-lg pt-6 sm:pt-7 lg:pt-8 xl:pt-7 2xl:pt-9 px-4 md:px-5 lg:px-7 pb-6 lg:pb-7 ${
				productVariant !== "gridSlim" && "xl:px-5 2xl:px-7"
			} ${className}`}
		>
			<SectionHeader
				sectionHeading="text-flash-sale"
				className="mb-4 md:mb-5 lg:mb-6 xl:mb-5 2xl:mb-6 3xl:mb-8"
			/>

			{error ? (
				<Alert message={error} />
			) : (
				<>
					{loading ? (
						<div
							className={`heightFull ${
								productVariant === "gridSlim" && "2xl:pt-1.5 3xl:pt-0"
							}`}
						>
							<Carousel
								breakpoints={
									carouselBreakpoint ? carouselBreakpoint : breakpoints
								}
								buttonSize="small"
								buttonClassName={
									productVariant === "gridSlim"
										? "-top-12 md:-top-14 lg:-top-28 2xl:-top-32"
										: "-top-12 md:-top-14"
								}
								className="-mx-0 md:-mx-2.5 xl:-mx-0"
							>
								{productVariant === "gridSlim"
									? Array.from({ length: 3 }).map((_, idx) => (
											<SwiperSlide key={`product-grid-${idx}`}>
												<ProductFlashSaleGridLoader
													uniqueKey={`product-grid-${idx}`}
												/>
											</SwiperSlide>
									  ))
									: Array.from({ length: 10 }).map((_, idx) => (
											<SwiperSlide key={`product-${idx}`}>
												<ProductFlashSaleLoader uniqueKey={`product-${idx}`} />
											</SwiperSlide>
									  ))}
							</Carousel>
						</div>
					) : (
						products?.length && (
							<div
								className={`heightFull ${
									productVariant === "gridSlim" ? "2xl:pt-1.5 3xl:pt-0" : ""
								}`}
							>
								<Carousel
									breakpoints={
										carouselBreakpoint ? carouselBreakpoint : breakpoints
									}
									buttonSize="small"
									buttonClassName={
										productVariant === "gridSlim"
											? "-top-12 md:-top-14 lg:-top-28 2xl:-top-32"
											: "-top-12 md:-top-14"
									}
								>
									{products.map((product) => (
										<SwiperSlide key={`product--key${product.id}`}>
											<div className="h-full flex flex-col justify-between">
												<div className="mb-5 sm:mb-7 lg:mb-8 2xl:mb-10 3xl:mb-12">
													<ProductCard
														product={product}
														imgWidth={imgWidth}
														imgHeight={imgHeight}
														variant={productVariant}
														contactClassName={`${
															productVariant === "list" &&
															"ltr:pl-4 ltr:lg:pl-6 ltr:3xl:pl-7 rtl:pr-4 rtl:lg:pr-6 rtl:3xl:pr-7"
														}`}
														imageContentClassName={`${
															productVariant === "list" &&
															"flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-48 xl:w-40 2xl:w-44 3xl:w-52"
														}`}
													/>
												</div>
												<ProgressCard
													soldProduct={product?.sold}
													totalProduct={product?.quantity}
												/>
											</div>
										</SwiperSlide>
									))}
								</Carousel>
							</div>
						)
					)}
				</>
			)}
		</div>
	);
};

export default SellWithProgress;
