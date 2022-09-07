import BannerCard from "apps/storefront/components/common/banner-card";
import CategoryListCard from "apps/storefront/components/common/category-list-card";
import Carousel from "apps/storefront/components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { useCategoriesQuery } from "apps/storefront/framework/rest/category/categories.query";
import { useWindowSize } from "apps/storefront/utils/use-window-size";
import CategoryListCardLoader from "apps/storefront/components/ui/loaders/category-list-card-loader";
import CategoryListFeedLoader from "apps/storefront/components/ui/loaders/category-list-feed-loader";
import { ROUTES } from "apps/storefront/lib/routes";
import Alert from "apps/storefront/components/ui/alert";
import isEmpty from "lodash/isEmpty";
import NotFoundItem from "apps/storefront/components/404/not-found-item";
import React from "react";
import { useTranslation } from "next-i18next";
import {StaticBanner} from "apps/storefront/framework/rest/types";

interface Props {
  	data: StaticBanner[];
	className?: string;
	paginationPosition?: "left" | "center";
}

const categoryResponsive = {
	"1280": {
		slidesPerView: 4,
		spaceBetween: 28,
	},
	"768": {
		slidesPerView: 3,
		spaceBetween: 24,
	},
	"480": {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 1,
		spaceBetween: 12,
	},
};

const HeroWithCategory: React.FC<Props> = ({
	className = "mb-12 md:mb-14 xl:mb-16", 
	data,
	paginationPosition = "center"
}) => {
  const { t } = useTranslation();
	const { width } = useWindowSize();
  const { data: categories, isLoading: loading, error } = useCategoriesQuery({
    limit: 10,
    parent: null
  });

  if (!loading && isEmpty(categories?.data)) {
    return (
      <NotFoundItem text={t("text-no-categories-found")} />
    )
  }

	return (
		<div
			className={`grid grid-cols-1 2xl:grid-cols-5 gap-5 xl:gap-7 ${className}`}
		>
			{error ? (
				<Alert message={error?.message} />
			) : width < 1500 ? (
				<div>
					<Carousel breakpoints={categoryResponsive} buttonSize="small">
						{loading && !categories?.data?.length
							? Array.from({ length: 8 }).map((_, idx) => (
									<SwiperSlide key={`category-list-${idx}`}>
										<CategoryListCardLoader
											uniqueKey={`category-list-${idx}`}
										/>
									</SwiperSlide>
							  ))
							: categories?.data?.map((category) => (
									<SwiperSlide key={`category--key${category.id}`}>
										<CategoryListCard category={category} />
									</SwiperSlide>
							  ))}
					</Carousel>
				</div>
			) : (
				<div className="ltr:2xl:-mr-14 rtl:2xl:-ml-14 grid grid-cols-1 gap-3">
					{loading && !categories?.data?.length ? (
						<CategoryListFeedLoader limit={8} />
					) : (
            			categories?.data
							?.slice(0, 8)
							.map((category) => (
								<CategoryListCard
									key={`category--key${category.id}`}
									category={category}
								/>
							))
					)}
				</div>
			)}

			<div className="heightFull col-span-full row-span-full 2xl:row-auto 2xl:col-span-4 ltr:2xl:ml-14 rtl:2xl:mr-14">
				<Carousel
					pagination={{
						clickable: true,
					}}
					className={`-mx-0 pagination-${paginationPosition}`}
					buttonClassName="hidden"
				>
					{data?.map((banner: any) => (
						<SwiperSlide key={`banner--key${banner.id}`}>
							<BannerCard
								data={banner}
								href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
								className="xl:h-full"
							/>
						</SwiperSlide>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default HeroWithCategory;
