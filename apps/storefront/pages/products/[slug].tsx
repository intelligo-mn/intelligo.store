import Container from "@components/ui/container";
import { getLayout } from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { useRouter } from "next/router";
import Spinner from "@components/ui/loaders/spinner/spinner";
import dynamic from "next/dynamic";

export { getStaticPaths, getStaticProps } from "@framework/ssr/product";

const RelatedProducts = dynamic(() => import("@containers/related-products"));

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
