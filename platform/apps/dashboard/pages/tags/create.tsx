import { useTranslation } from "next-i18next";
import Layout from "apps/dashboard/src/components/layouts/admin";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CreateOrUpdateTagForm from "apps/dashboard/src/components/tag/tag-form";
import { adminOnly } from "apps/dashboard/src/utils/auth-utils";

export default function CreateCategoriesPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-gray-300">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:button-label-add-tag")}
        </h1>
      </div>
      <CreateOrUpdateTagForm />
    </>
  );
}
CreateCategoriesPage.authenticate = {
  permissions: adminOnly,
};
CreateCategoriesPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});
