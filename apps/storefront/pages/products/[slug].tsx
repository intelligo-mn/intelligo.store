import Container from "apps/storefront/components/ui/container";
import { getLayout } from "apps/storefront/components/layout/layout";
import Subscription from "apps/storefront/components/common/subscription";
import ProductSingleDetails from "apps/storefront/components/product/product-single-details";
import Divider from "apps/storefront/components/ui/divider";
import Breadcrumb from "apps/storefront/components/common/breadcrumb";
import { useRouter } from "next/router";
import Spinner from "apps/storefront/components/ui/loaders/spinner/spinner";
import dynamic from "next/dynamic";

export { getStaticPaths, getStaticProps } from "apps/storefront/framework/rest/ssr/product";

const RelatedProducts = dynamic(() => import("apps/storefront/containers/related-products"));

export default function ProductPage({ product }: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <>
      <Divider className="mb-0" />
      <Container>
        <div className="pt-8">
          <Breadcrumb />
        </div>
        <ProductSingleDetails product={product} />
        <RelatedProducts
          products={product?.related_products}
          currentProductId={product?.id}
          sectionHeading="text-related-products"
        />
        <Subscription />
      </Container>
    </>
  );
}

ProductPage.getLayout = getLayout;
