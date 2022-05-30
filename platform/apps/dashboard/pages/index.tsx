import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from "apps/dashboard/src/utils/auth-utils";
import { SUPER_ADMIN } from "apps/dashboard/src/utils/constants";
import { ROUTES } from "apps/dashboard/src/utils/routes";
import AppLayout from "apps/dashboard/src/components/layouts/app";
const AdminDashboard = dynamic(() => import("apps/dashboard/src/components/dashboard/admin"));
const OwnerDashboard = dynamic(() => import("apps/dashboard/src/components/dashboard/owner"));

export default function Dashboard({
  userPermissions,
}: {
  userPermissions: string[];
}) {
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
  if (locale) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "table",
          "widgets",
        ])),
        userPermissions: permissions,
      },
    };
  }
  return {
    props: {
      userPermissions: permissions,
    },
  };
};
