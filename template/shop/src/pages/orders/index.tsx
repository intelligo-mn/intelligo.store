import Orders from '@/components/orders/orders';
import Seo from '@/components/seo/seo';
export { getStaticProps } from '@/framework/general.ssr';
import DashboardLayout from '@/layouts/_dashboard';

export default function OrdersPage() {
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Orders />
    </>
  );
}
OrdersPage.authenticationRequired = true;

OrdersPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
