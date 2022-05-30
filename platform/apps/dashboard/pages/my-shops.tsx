import OwnerDashboard from "apps/dashboard/components/dashboard/owner";
import AdminLayout from "apps/dashboard/components/layouts/admin";
import { adminOnly } from "apps/dashboard/utils/auth-utils";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common"])),
  },
});
const MyShopsPage = () => {
  return <OwnerDashboard />;
};

MyShopsPage.authenticate = {
  permissions: adminOnly,
};
MyShopsPage.Layout = AdminLayout;
export default MyShopsPage;
