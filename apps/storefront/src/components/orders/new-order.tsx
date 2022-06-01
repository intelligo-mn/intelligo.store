import { useRouter } from "next/router";
import { useOrderQuery } from "@framework/orders/orders.query";
import Spinner from "@components/ui/loaders/spinner/spinner";
import OrderView from "@components/orders/order-view";
import Divider from "@components/ui/divider";
import Subscription from "@components/common/subscription";
import Container from "@components/ui/container";
import { useEffect } from "react";
import { useCart } from "@store/quick-cart/cart.context";
import { useAtom } from "jotai";
import { clearCheckoutAtom } from "@store/checkout";

export default function NewOrder() {
  const { resetCart } = useCart();
  const [, resetCheckout] = useAtom(clearCheckoutAtom);
  const { query } = useRouter();
  const { data, isLoading } = useOrderQuery({
    tracking_number: query.tracking_number as string,
  });

  useEffect(() => {
    resetCart();
    resetCheckout();
  }, [resetCart, resetCheckout]);

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
