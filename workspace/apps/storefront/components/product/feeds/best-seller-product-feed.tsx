import ProductsBlock from "@containers/products-block";
import { useTranslation } from "next-i18next";
import isEmpty from "lodash/isEmpty";
import NotFoundItem from "@components/404/not-found-item";
import { usePopularProductsQuery } from "@framework/products/popular-products.query";

export default function BestSellerProductFeed() {
  const { t } = useTranslation();
  const { data: products, isLoading: loading, error }: any = usePopularProductsQuery({
    limit: 10
  })

  if (!loading && isEmpty(products)) {
    return (
      <NotFoundItem text={t("text-no-best-selling-products-found")} />
    )
  }

	return (
		<ProductsBlock
			sectionHeading="text-best-sellers"
			products={products}
			loading={loading}
			error={error?.message}
			uniqueKey="best-sellers"
		/>
	);
}
