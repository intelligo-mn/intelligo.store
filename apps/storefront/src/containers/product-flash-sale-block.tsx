import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductCardGridLoader from "@components/ui/loaders/product-card-grid-loader";
import Alert from "@components/ui/alert";
import { useProductsQuery } from "@framework/products/products.query";
import { Product } from "@framework/types";
import { siteSettings } from "@settings/site.settings";
import { useTranslation } from "next-i18next";
import isEmpty from "lodash/isEmpty";
import NotFoundItem from "@components/404/not-found-item";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";

interface ProductsProps {
  sectionHeading?: string;
  className?: string;
  date?: any;
  variant?: "default" | "slider";
  limit?: number;
}

const breakpoints = {
  "1500": {
    slidesPerView: 5,
    spaceBetween: 28,
  },
  "1025": {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  "768": {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  "480": {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  "0": {
    slidesPerView: 2,
    spaceBetween: 12,
  },
};

const ProductsFlashSaleBlock: React.FC<ProductsProps> = ({
  sectionHeading = "text-flash-sale",
  className = "mb-12 md:mb-14 xl:mb-16",
  variant = "default",
  limit = 10,
}) => {
  const { t } = useTranslation();
  const flashSellSettings = siteSettings?.homePageBlocks?.flashSale;

  const {
    data: products,
    isLoading: loading,
    error,
  } = useProductsQuery({
    limit,
    tags: flashSellSettings?.slug,
  });

  if (!loading && isEmpty(products?.data)) {
    return <NotFoundItem text={t("text-no-flash-products-found")} />;
  }

  return (
    <div
      className={`${className} ${
        variant === "default"
          ? "border border-gray-300 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7"
          : ""
      }`}
    >
      <div className="flex justify-between items-center flex-wrap mb-5 md:mb-6">
        <SectionHeader sectionHeading={sectionHeading} className="mb-0" />
      </div>
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div
          className={`${
            variant === "default"
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:lg:gap-y-6 2xl:gap-y-8"
              : "block"
          }`}
        >
          {loading && products?.data?.length ? (
            Array.from({ length: 10 }).map((_, idx) => (
              <ProductCardGridLoader
                key={idx}
                uniqueKey={`flash-sale-${idx}`}
              />
            ))
          ) : (
            <>
              {variant === "default" ? (
                products?.data?.map((product: Product) => (
                  <ProductCard
                    key={`product--key${product.id}`}
                    product={product}
                    imgWidth={324}
                    imgHeight={324}
                    variant="gridSlim"
                  />
                ))
              ) : (
                <Carousel
                  breakpoints={breakpoints}
                  buttonClassName="-mt-8 md:-mt-10"
                  autoplay={{
                    delay: 3500,
                  }}
                >
                  {products?.data?.map((product: Product) => (
                    <SwiperSlide key={`product--key-${product.id}`}>
                      <ProductCard
                        key={`product--key${product.id}`}
                        product={product}
                        imgWidth={324}
                        imgHeight={324}
                        variant="gridSlim"
                      />
                    </SwiperSlide>
                  ))}
                </Carousel>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsFlashSaleBlock;
