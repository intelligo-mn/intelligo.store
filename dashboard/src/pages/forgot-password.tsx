import ForgotPasswordForm from "@components/auth/forget-password/forget-password";
import Logo from "@components/ui/logo";
import { getAuthCredentials, isAuthenticated } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common", "form"])),
  },
});

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { token, permissions } = getAuthCredentials();
  if (isAuthenticated({ token, permissions })) {
    router.replace(ROUTES.DASHBOARD);
  }
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen bg-light sm:bg-gray-100">
      <div className="m-auto max-w-[420px] w-full bg-light sm:shadow p-5 sm:p-8 rounded">
        <div className="flex justify-center mb-2">
          <Logo />
        </div>
        <h3 className="text-center text-base italic text-body mb-6 mt-4">
          {t("form:form-title-forgot-password")}
        </h3>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
