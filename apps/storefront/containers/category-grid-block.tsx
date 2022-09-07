import SectionHeader from "apps/storefront/components/common/section-header";
import Carousel from "apps/storefront/components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import CategoryCard from "apps/storefront/components/common/category-card";
import { useWindowSize } from "apps/storefront/utils/use-window-size";
import CategoryCardLoader from "apps/storefront/components/ui/loaders/category-card-loader";
import Alert from "apps/storefront/components/ui/alert";
import { useFeaturedCategoriesQuery } from "apps/storefront/framework/rest/category/featured-categories.query";
import isEmpty from "lodash/isEmpty";
import NotFoundItem from "apps/storefront/components/404/not-found-item";
import { useTranslation } from "next-i18next";

interface CategoriesProps {
	sectionHeading: string;
	className?: string;
}

const breakpoints = {
	"1220": {
		slidesPerView: 4,
		spaceBetween: 28,
	},
	"800": {
		slidesPerView: 3,
		spaceBetween: 20,
	},
	"440": {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 1,
		spaceBetween: 12,
	},
};

const CategoryGridBlock: React.FC<CategoriesProps> = ({
	sectionHeading = "text-section-title",
	className = "mb-12 md:mb-14 xl:mb-16",
}) => {
	const { width } = useWindowSize();
  const {t} = useTranslation();

  const { data: categories, isLoading: loading, error } = useFeaturedCategoriesQuery({
    limit: 3,
  });

  if (!loading && isEmpty(categories)) {
    return <NotFoundItem text={t("text-no-categories-found")}/>;
  }

  return (
		<div className={className}>
			<SectionHeader sectionHeading={sectionHeading} />
			{error ? (
				<Alert message={error?.message} />
			) : (
				<>
					{width < 1025 ? (
						<div className="relative">
							<Carousel breakpoints={breakpoints}>
								{loading
									? Array.from({ length: categories?.length ?? 0 }).map((_, idx) => (
											<SwiperSlide key={idx}>
												<CategoryCardLoader
													uniqueKey={`featured-category-${idx}`}
												/>
											</SwiperSlide>
									  ))
									: categories?.map((category) => (
											<SwiperSlide key={`category--key${category.id}`}>
												<CategoryCard category={category} />
											</SwiperSlide>
									  ))}
							</Carousel>
						</div>
					) : (
						<div className="lg:grid lg:grid-cols-3 lg:gap-5 xl:gap-7">
							{loading
								? Array.from({ length: categories?.length ?? 0 }).map((_, idx) => (
										<CategoryCardLoader
											key={idx}
											uniqueKey={`featured-category-${idx}`}
										/>
								  ))
								: categories?.map((category) => (
										<CategoryCard
											key={`category--key${category.id}`}
											category={category}
										/>
								  ))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default CategoryGridBlock;
