import { getLayout } from '@/components/layouts/layout';
import Order from '@/components/orders/order-view';
import Seo from '@/components/seo/seo';
export { getServerSideProps } from '@/framework/order.ssr';
export default function OrderPage() {
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Order />
    </>
  );
}

OrderPage.getLayout = getLayout;

// wallet_point only parent order - no children
