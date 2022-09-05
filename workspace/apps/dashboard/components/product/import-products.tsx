import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ImportCsv from "@components/ui/import-csv";
import { useShopQuery } from "@data/shop/use-shop.query";
import { useImportProductsMutation } from "@data/import/use-import-products.mutation";

export default function ImportProducts() {
  const { t } = useTranslation("common");
  const {
    query: { shop },
  } = useRouter();
  const { data: shopData } = useShopQuery(shop as string);
  const shopId = shopData?.shop?.id!;
  const { mutate: importProducts, isLoading: loading } =
    useImportProductsMutation();

  const handleDrop = async (acceptedFiles: any) => {
    if (acceptedFiles.length) {
      importProducts({
        shop_id: shopId,
        csv: acceptedFiles[0],
      });
    }
  };

  return (
    <ImportCsv
      onDrop={handleDrop}
      loading={loading}
      title={t("text-import-products")}
    />
  );
}
