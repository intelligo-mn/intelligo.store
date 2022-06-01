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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AdminDashboard = dynamic(() => import("@components/dashboard/admin"));
const OwnerDashboard = dynamic(() => import("@components/dashboard/owner"));

export default function Dashboard() {
  const router = useRouter();
  // Authentication
  const { token, permissions } = getAuthCredentials();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (
      isAuthenticated({ token, permissions }) &&
      hasAccess(allowedRoles, permissions)
    ) {
      setLoggedIn(true);
    } else {
      router.replace(ROUTES.LOGIN);
    }
  }, []);

  // until UseEffect handle its operation
  if (!loggedIn) {
    return null;
  }

  if (permissions?.includes(SUPER_ADMIN)) {
    return <AdminDashboard />;
  }
  return <OwnerDashboard />;
}

Dashboard.Layout = AppLayout;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "table",
        "widgets",
      ])),
    },
  };
};
