import OwnerDashboard from "@components/dashboard/owner";
import AdminLayout from "@components/layouts/admin";
import { adminOnly } from "@utils/auth-utils";
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
