import Container from "apps/storefront/components/ui/container";
import { getLayout } from "apps/storefront/components/layout/layout";
import Subscription from "apps/storefront/components/common/subscription";
import CategoryBanner from "apps/storefront/containers/category-banner";
import { useRouter } from "next/router";
import CategoryProductsGrid from "apps/storefront/components/category/category-products-grid";

export { getStaticPaths, getStaticProps } from "apps/storefront/framework/rest/ssr/category";

export default function Category() {
  const { query } = useRouter();

  return (
    <div className="border-t-2 border-borderBottom">
      <Container>
        <CategoryBanner className="my-4"/>
        <div className="pb-16 lg:pb-20">
          <CategoryProductsGrid
            classname="3xl:grid-cols-6"
            categorySlug={query?.slug as string}
          />
        </div>
        <Subscription />
      </Container>
    </div>
  );
}

Category.getLayout = getLayout;
