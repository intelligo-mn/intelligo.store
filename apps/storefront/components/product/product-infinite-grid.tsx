import ProductCard from "@components/product/product-card";
import Button from "@components/ui/button";
import type { FC } from "react";
import { PaginatedProduct } from "@framework/products/products.query";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useTranslation } from "next-i18next";
import { Product } from "@framework/types";
import isEmpty from "lodash/isEmpty";
import NotFound from "@components/404/not-found";

interface ProductGridProps {
  className?: string;
  loading: boolean;
  data: any;
  hasNextPage: boolean | undefined;
  loadingMore: any;
  fetchNextPage: () => void;
}

export const ProductInfiniteGrid: FC<ProductGridProps> = ({
  className = "",
  loading,
  data,
  hasNextPage,
  loadingMore,
  fetchNextPage,
}) => {
  const { t } = useTranslation();

  // If no product found
  if (!loading && isEmpty(data?.pages?.[0].data)) {
    return <NotFound text={t("text-no-products-found")} />;
  }

  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
      >
        {loading && !data?.pages?.length ? (
          <ProductFeedLoader limit={20} uniqueKey="search-product" />
        ) : (
          data?.pages?.map((page: PaginatedProduct) => {
            return page?.data?.map((product: Product) => (
              <ProductCard
                key={`product--key${product.id}`}
                product={product}
                variant="grid"
              />
            ));
          })
        )}
      </div>
      <div className="text-center pt-8 xl:pt-14">
        {hasNextPage && (
          <Button
            loading={loadingMore}
            disabled={loadingMore}
            onClick={() => fetchNextPage()}
            variant="slim"
          >
            {t("button-load-more")}
          </Button>
        )}
      </div>
    </>
  );
};

export default ProductInfiniteGrid;
