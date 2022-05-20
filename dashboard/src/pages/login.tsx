import LoginForm from "@components/auth/login-form";
import Logo from "@components/ui/logo";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { ROUTES } from "@utils/routes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAuthCredentials, isAuthenticated } from "@utils/auth-utils";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common", "form"])),
  },
});

export default function LoginPage() {
  const router = useRouter();
  const { token, permissions } = getAuthCredentials();
  if (isAuthenticated({ token, permissions })) {
    router.replace(ROUTES.DASHBOARD);
  }
  const { t } = useTranslation("common");
  return (
    <div className="flex items-center justify-center h-screen bg-light sm:bg-gray-100">
      <div className="m-auto max-w-[420px] w-full bg-light sm:shadow p-5 sm:p-8 rounded">
        <div className="flex justify-center mb-2">
          <Logo />
        </div>
        <h3 className="text-center text-base italic text-body mb-6 mt-4">
          {t("admin-login-title")}
        </h3>
        <LoginForm />
      </div>
    </div>
  );
}
