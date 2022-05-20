import ProfileUpdateFrom from "@components/auth/profile-update-form";
import { useMeQuery } from "@graphql/me.graphql";
import ChangePasswordForm from "@components/auth/change-password-from";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from "@utils/auth-utils";
import { GetServerSideProps } from "next";
import { ROUTES } from "@utils/routes";
import AppLayout from "@components/layouts/app";

export default function ProfilePage() {
  const { t } = useTranslation();
  const { data, loading, error } = useMeQuery();
  if (loading) return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-profile-settings")}
        </h1>
      </div>

      <ProfileUpdateFrom me={data?.me} />
      <ChangePasswordForm />
    </>
  );
}

ProfilePage.Layout = AppLayout;

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
      ...(await serverSideTranslations(locale!, ["common", "form"])),
      userPermissions: permissions,
    },
  };
};
