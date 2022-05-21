import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ImportCsv from "@components/ui/import-csv";
import { useShopQuery } from "@data/shop/use-shop.query";
import { useImportVariationOptionsMutation } from "@data/import/use-import-variation-options.mutation";

export default function ImportVariationOptions() {
  const { t } = useTranslation();
  const {
    query: { shop },
  } = useRouter();
  const { data: shopData } = useShopQuery(shop as string);
  const shopId = shopData?.shop?.id!;
  const { mutate: importVariationOptions, isLoading: loading } =
    useImportVariationOptionsMutation();

  const handleDrop = async (acceptedFiles: any) => {
    if (acceptedFiles.length) {
      importVariationOptions({
        shop_id: shopId,
        csv: acceptedFiles[0],
      });
    }
  };

  return (
    <ImportCsv
      onDrop={handleDrop}
      loading={loading}
      title={t("text-import-product-variations")}
    />
  );
}
