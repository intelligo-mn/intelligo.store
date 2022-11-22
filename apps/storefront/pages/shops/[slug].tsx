import Container from "@components/ui/container";
import { getLayout } from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ShopsSingleDetails from "@components/shops/shops-single-details";

export { getStaticPaths, getStaticProps } from "@framework/ssr/shop";

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
