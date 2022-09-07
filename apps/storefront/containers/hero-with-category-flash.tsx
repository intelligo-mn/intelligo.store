import BannerCard from "apps/storefront/components/common/banner-card";
import CategoryListCard from "apps/storefront/components/common/category-list-card";
import SellWithProgress from "apps/storefront/components/common/sale-with-progress";
import Carousel from "apps/storefront/components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { useCategoriesQuery } from "apps/storefront/framework/rest/category/categories.query";
import { useProductsQuery } from "apps/storefront/framework/rest/products/products.query";
import { useWindowSize } from "apps/storefront/utils/use-window-size";
import CategoryListCardLoader from "apps/storefront/components/ui/loaders/category-list-card-loader";
import { ROUTES } from "apps/storefront/lib/routes";
import Alert from "apps/storefront/components/ui/alert";
import { useTranslation } from "next-i18next";
import isEmpty from "lodash/isEmpty";
import NotFoundItem from "apps/storefront/components/404/not-found-item";
import React from "react";
import { StaticBanner } from "apps/storefront/framework/rest/types";

interface Props {
  data: StaticBanner[];
  className?: string;
}

const categoryResponsive = {
  "768": {
    slidesPerView: 3,
    spaceBetween: 14,
  },
  "480": {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

const HeroWithCategoryFlash: React.FC<Props> = ({
  className = "mb-12 md:mb-14 xl:mb-16",
  data,
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-7 2xl:grid-cols-9 gap-5 xl:gap-7 lg:gap-y-14 ${className}`}
    >
      <CategoryListCardSection />

      <div className="col-span-full lg:col-span-5 xl:col-span-5 row-span-full lg:row-auto grid grid-cols-2 gap-2 md:gap-3.5 lg:gap-5 xl:gap-7">
        {data.map((banner: any) => (
          <BannerCard
            key={`banner--key${banner.id}`}
            data={banner}
            href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
            className={banner.type === "large" ? "col-span-2" : "col-span-1"}
          />
        ))}
      </div>

      <SellWithProgressCardSection />
    </div>
  );
};

// CategoryList section
export function CategoryListCardSection() {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const {
    data: categories,
    isLoading: loading,
    error,
  } = useCategoriesQuery({
    limit: 10,
    parent: null,
  });

  if (!loading && isEmpty(categories?.data)) {
    return <NotFoundItem text={t("text-no-categories-found")} />;
  }

  return (
    <>
      {error ? (
        <div className="col-span-full lg:col-span-2">
          <Alert message={error?.message} />
        </div>
      ) : width < 1025 ? (
        <div className="col-span-full">
          <Carousel breakpoints={categoryResponsive} buttonSize="small">
            {loading
              ? Array.from({ length: 7 }).map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <CategoryListCardLoader
                      uniqueKey={`category-list-${idx}`}
                    />
                  </SwiperSlide>
                ))
              : categories?.data?.map((category: any) => (
                  <SwiperSlide key={`sm-category--key${category.id}`}>
                    <CategoryListCard category={category} />
                  </SwiperSlide>
                ))}
          </Carousel>
        </div>
      ) : (
        <div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 justify-between">
          {loading
            ? Array.from({ length: 7 }).map((_, idx) => (
                <CategoryListCardLoader
                  key={idx}
                  uniqueKey={`category-list-${idx}`}
                />
              ))
            : categories?.data
                .slice(0, 7)
                .map((category: any) => (
                  <CategoryListCard
                    key={`lg-category--key${category.id}`}
                    category={category}
                  />
                ))}
        </div>
      )}
    </>
  );
}

// ProgressCard section
export function SellWithProgressCardSection() {
  const { width } = useWindowSize();
  const { t } = useTranslation();
  const {
    data: products,
    isLoading: loading,
    error,
  } = useProductsQuery({
    limit: 10,
  });

  if (!loading && isEmpty(products?.data)) {
    return <NotFoundItem text={t("text-no-products-found")} />;
  }

  return (
    <>
      {width < 1441 ? (
        <SellWithProgress
          // TODO: Fix the types
          // @ts-ignore
          products={products?.data}
          className="col-span-full"
          loading={loading}
          error={error?.message}
        />
      ) : (
        <SellWithProgress
          // TODO: Fix the types
          // @ts-ignore
          products={products?.data}
          productVariant="gridSlim"
          loading={loading}
          imgWidth={330}
          imgHeight={425}
          error={error?.message}
          className="col-span-full 2xl:col-span-2 2xl:row-auto xl:hidden 2xl:flex"
        />
      )}
    </>
  );
}

export default HeroWithCategoryFlash;
