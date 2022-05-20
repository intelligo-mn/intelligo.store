import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from "@utils/auth-utils";
import { SUPER_ADMIN } from "@utils/constants";
import { ROUTES } from "@utils/routes";
import AppLayout from "@components/layouts/app";
const AdminDashboard = dynamic(() => import("@components/dashboard/admin"));
const OwnerDashboard = dynamic(() => import("@components/dashboard/owner"));

export default function Dashboard({ userPermissions }: any) {
  if (userPermissions?.includes(SUPER_ADMIN)) {
    return <AdminDashboard />;
  }
  return <OwnerDashboard />;
}

Dashboard.Layout = AppLayout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx;
  const { token, permissions } = getAuthCredentials(ctx);
  if (
    !isAuthenticated({ token, permissions }) ||
    !hasAccess(allowedRoles, permissions)
  ) {
    return {
      redirect: {
        destination: ROUTES.LOGIN,
        permanent: false,
      },
    };
  }
  return {
    props: {
      userPermissions: permissions,
      ...(await serverSideTranslations(locale!, [
        "common",
        "table",
        "widgets",
      ])),
    },
  };
};
