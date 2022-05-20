import DashboardSidebar from '@/components/dashboard/sidebar';
import { getLayout as getSiteLayout } from '@/components/layouts/layout';
import Refunds from '@/components/refunds/refund-view';
import Seo from '@/components/seo/seo';
import DashboardLayout from '@/layouts/_dashboard';
export { getStaticProps } from '@/framework/general.ssr';

export default function RefundsPage() {
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Refunds />
    </>
  );
}

// const getLayout = (page: React.ReactElement) =>
//   getSiteLayout(
//     <div className="flex flex-col items-start w-full min-h-screen mx-auto bg-gray-100 lg:flex-row max-w-1920 md:py-10 md:px-5 xl:py-14 xl:px-8 2xl:px-14 lg:min-h-0">
//       <DashboardSidebar className="hidden shrink-0 lg:block lg:w-80 ltr:mr-8 rtl:ml-8" />
//       {page}
//     </div>
//   );
RefundsPage.authenticationRequired = true;

RefundsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

// RefundsPage.getLayout = getLayout;
