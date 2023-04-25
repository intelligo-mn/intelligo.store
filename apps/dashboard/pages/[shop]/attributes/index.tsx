import Card from "@components/common/card";
import AttributeList from "@components/attribute/attribute-list";
import ErrorMessage from "@components/ui/error-message";
import LinkButton from "@components/ui/link-button";
import Loader from "@components/ui/loader/loader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShopLayout from "@components/layouts/shop";
import { useRouter } from "next/router";
import { adminOwnerAndStaffOnly } from "@utils/auth-utils";
import { useAttributesQuery } from "@data/attributes/use-attributes.query";
import { useShopQuery } from "@data/shop/use-shop.query";
import { useState } from "react";
import { SortOrder } from "@ts-types/generated";
import { useModalAction } from "@components/ui/modal/modal.context";
import { MoreIcon } from "@components/icons/more-icon";
import Button from "@components/ui/button";

export default function AttributePage() {
  const {
    query: { shop },
  } = useRouter();
  const { t } = useTranslation();
  const { openModal } = useModalAction();

  const [orderBy, setOrder] = useState("updated_at");
  const [sortedBy, setColumn] = useState<SortOrder>(SortOrder.Desc);
  const { data: shopData, isLoading: fetchingShop } = useShopQuery(
    shop as string
  );
  const shopId = shopData?.shop?.id!;
  function handleImportModal() {
    openModal("EXPORT_IMPORT_ATTRIBUTE", shopId);
  }
  const {
    data,
    isLoading: loading,
    error,
  } = useAttributesQuery(
    {
      shop_id: Number(shopId),
      orderBy,
      sortedBy,
    },
    {
      enabled: Boolean(shopId),
    }
  );
  if (loading || fetchingShop)
    return <Loader text={t("common:text-loading")} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-xl font-semibold text-heading">
            {t("common:sidebar-nav-item-attributes")}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 xl:w-2/4 ms-auto">
          <LinkButton
            href={`/${shop}/attributes/create`}
            className="h-12 mt-5 md:mt-0 md:ms-auto w-full md:w-auto"
          >
            <span>
              + {t("form:button-label-add")} {t("common:attribute")}
            </span>
          </LinkButton>

          <Button onClick={handleImportModal} className="mt-5 w-full md:hidden">
            {t("common:text-export-import")}
          </Button>
          <button
            onClick={handleImportModal}
            className="hidden md:flex w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 items-center justify-center flex-shrink-0 ms-6 transition duration-300"
          >
            <MoreIcon className="w-3.5 text-body" />
          </button>
        </div>
      </Card>
      <AttributeList
        attributes={data?.attributes as any}
        onOrder={setOrder}
        onSort={setColumn}
      />
    </>
  );
}
AttributePage.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
AttributePage.Layout = ShopLayout;
export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "common", "form"])),
  },
});
