import { getLayout } from "apps/storefront/components/layout/layout";
import Container from "apps/storefront/components/ui/container";
import Subscription from "apps/storefront/components/common/subscription";
import ShopsPageContent from "apps/storefront/components/shops/shops-page-content";

export { getStaticProps } from "apps/storefront/framework/rest/ssr/shops";

export default function ShopsPage() {
  return (
    <>
      <ShopsPageContent />
      <Container>
        <Subscription />
      </Container>
    </>
  );
}

ShopsPage.getLayout = getLayout;
