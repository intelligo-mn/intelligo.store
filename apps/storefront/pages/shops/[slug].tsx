import Container from "apps/storefront/components/ui/container";
import { getLayout } from "apps/storefront/components/layout/layout";
import Subscription from "apps/storefront/components/common/subscription";
import ShopsSingleDetails from "apps/storefront/components/shops/shops-single-details";

export { getStaticPaths, getStaticProps } from "apps/storefront/framework/rest/ssr/shop";

export default function ShopDetailsPage({ data }: any) {
  return (
    <div className="border-t border-gray-300">
      {data?.shop && <ShopsSingleDetails data={data.shop} />}
      <Container>
        <Subscription />
      </Container>
    </div>
  );
}

ShopDetailsPage.getLayout = getLayout;
