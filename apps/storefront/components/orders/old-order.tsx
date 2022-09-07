import { useRouter } from "next/router";
import { useOrderQuery } from "apps/storefront/framework/rest/orders/orders.query";
import Spinner from "apps/storefront/components/ui/loaders/spinner/spinner";
import OrderView from "apps/storefront/components/orders/order-view";
import Divider from "apps/storefront/components/ui/divider";
import Subscription from "apps/storefront/components/common/subscription";
import Container from "apps/storefront/components/ui/container";

export default function OldOrder() {
  const { query } = useRouter();
  const { data, isLoading } = useOrderQuery({
    tracking_number: query.tracking_number as string,
  });

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner showText={false} />
      </div>
    );
  }

  return (
    <>
      <Divider />
      <Container>
        <OrderView order={data?.order} />
        <Subscription />
      </Container>
    </>
  );
}
