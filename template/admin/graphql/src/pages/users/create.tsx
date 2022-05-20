import Layout from "@components/layouts/admin";
import UserRegistrationForm from "@components/user/user-form";
import { adminOnly } from "@utils/auth-utils";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function RegisterUserPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-create-customer")}
        </h1>
      </div>
      <UserRegistrationForm />
    </>
  );
}
RegisterUserPage.authenticate = {
  permissions: adminOnly,
};
RegisterUserPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "form", "common"])),
  },
});
