import React from "react";
import { useProductsInfiniteQuery } from "apps/storefront/framework/rest/products/products.query";
import ProductInfiniteGrid from "apps/storefront/components/product/product-infinite-grid";

type Props = {
  classname?: string;
  categorySlug: string;
};

const CategoryProductsGrid: React.FC<Props> = ({
  classname = "",
  categorySlug,
}) => {
  const {
    isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useProductsInfiniteQuery({
    category: categorySlug && categorySlug,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <ProductInfiniteGrid
      className={classname}
      loading={isLoading}
      data={data}
      hasNextPage={hasNextPage}
      loadingMore={loadingMore}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default CategoryProductsGrid;
