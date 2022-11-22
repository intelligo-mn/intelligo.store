import ForgotPasswordForm from "@components/auth/forget-password/forget-password";
import Logo from "@components/ui/logo";
import { SUPER_ADMIN } from "@utils/constants";
import { parseContextCookie } from "@utils/parse-cookie";
import { ROUTES } from "@utils/routes";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps: GetServerSideProps = async ({
  context,
  locale,
}: any) => {
  const cookies = parseContextCookie(context?.req?.headers?.cookie);
  if (cookies?.auth_token) {
    if (cookies?.auth_permissions?.includes(SUPER_ADMIN)) {
      return {
        redirect: { destination: ROUTES.DASHBOARD, permanent: false },
      };
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "form"])),
    },
  };
};

export default function ForgotPasswordPage() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen bg-light sm:bg-gray-100">
      <div className="m-auto max-w-sm w-full bg-light sm:shadow p-5 sm:p-8 rounded">
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
