import BannerCard from "@components/common/banner-card";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductCardListSmallLoader from "@components/ui/loaders/product-card-small-list-loader";
import { useProductsQuery } from "@framework/products/products.query";
import { saleBannerWithProducts as banner } from "@data/static/banners";
import Alert from "@components/ui/alert";
import { ROUTES } from "@lib/routes";
import { Product } from "@framework/types";

import { siteSettings } from "@settings/site.settings";

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  variant?: "default" | "center" | "left" | "fashion";
  productVariant?: "grid" | "gridSlim" | "list" | "listSmall";
  imageHeight?: number;
  imageWidth?: number;
  limit?: number;
  bannerData?: any;
}

const SaleBannerWithProducts: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  variant = "default",
  className = "mb-12 md:mb-14 xl:mb-16",
  productVariant = "listSmall",
  imageHeight = 176,
  imageWidth = 176,
  limit = 4,
  bannerData = banner,
}) => {
  const onSellingSettings = siteSettings?.homePageBlocks?.onSaleSettings;

  const { data, isLoading, error } = useProductsQuery({
    limit,
    tags: onSellingSettings?.slug,
  });

  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div
          className={`grid grid-cols-1 ${
            variant === "fashion"
              ? "2xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4"
              : "2xl:grid-cols-4 2xl:grid-rows-2 md:grid-cols-2"
          } gap-3 md:gap-6 lg:gap-5 xl:gap-7`}
        >
          {variant === "fashion" ? (
            <div className="sm:col-span-full sm:grid-cols-4 grid 2xl:col-span-2 2xl:row-span-2 order-2 md:gap-8 sm:gap-3">
              <BannerCard
                data={bannerData[0]}
                href={`${ROUTES.COLLECTIONS}/${bannerData[0].slug}`}
                effectActive={true}
                className="sm:col-span-2 2xl:col-span-full"
              />
              <BannerCard
                data={bannerData[1]}
                href={`${ROUTES.COLLECTIONS}/${bannerData[1].slug}`}
                effectActive={true}
                className="sm:col-span-2 2xl:col-span-full"
              />
            </div>
          ) : (
            <BannerCard
              data={bannerData[0]}
              href={`${ROUTES.COLLECTIONS}/${bannerData[0].slug}`}
              effectActive={true}
              className="md:col-span-full 2xl:col-span-2 2xl:row-span-2 order-2"
            />
          )}
          {isLoading
            ? Array.from({ length: 2 }).map((_, idx) => (
                <ProductCardListSmallLoader
                  key={idx}
                  uniqueKey={`on-selling-${idx}`}
                />
              ))
            : data?.data?.map((product: Product, index: number) => (
                <div
                  key={`product--key${product.id}`}
                  className={`${
                    variant === "center" && index === 0
                      ? "2xl:order-0"
                      : "2xl:order-2"
                  }`}
                >
                  <ProductCard
                    product={product}
                    imgWidth={imageHeight}
                    imgHeight={imageWidth}
                    variant={productVariant}
                  />
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default SaleBannerWithProducts;
