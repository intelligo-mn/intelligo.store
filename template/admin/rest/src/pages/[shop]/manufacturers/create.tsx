import ManufacturerCreateOrUpdateForm from "@components/manufacturer/manufacturer-form";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopLayout from "@components/layouts/shop";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";

export default function CreateManufacturerPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-create-manufacturer")}
        </h1>
      </div>
      <ManufacturerCreateOrUpdateForm />
    </>
  );
}
CreateManufacturerPage.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
CreateManufacturerPage.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
