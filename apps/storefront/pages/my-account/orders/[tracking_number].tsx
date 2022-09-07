import { getLayout } from "apps/storefront/components/layout/layout";
import { useRouter } from "next/router";
import PageLoader from "apps/storefront/components/ui/page-loader/page-loader";
import OldOrder from "apps/storefront/components/orders/old-order";

export { getStaticPaths, getStaticProps } from "apps/storefront/framework/rest/ssr/order";

export default function OrderPage() {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <PageLoader />;
  }

  return <OldOrder />;
}

OrderPage.authenticate = true;
OrderPage.getLayout = getLayout;
