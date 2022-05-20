import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopLayout from "@components/layouts/shop";
import AddStaffForm from "@components/shop/staff-form";
import { adminAndOwnerOnly } from "@utils/auth-utils";

export default function AddStaffPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-create-staff")}
        </h1>
      </div>
      <AddStaffForm />
    </>
  );
}
AddStaffPage.authenticate = {
  permissions: adminAndOwnerOnly,
};
AddStaffPage.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "form", "common"])),
  },
});
