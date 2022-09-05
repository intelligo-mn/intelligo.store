import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ImportCsv from "@components/ui/import-csv";
import { useShopQuery } from "@data/shop/use-shop.query";
import { useImportAttributesMutation } from "@data/import/use-import-attributes.mutation";

export default function ImportAttributes() {
  const { t } = useTranslation();
  const {
    query: { shop },
  } = useRouter();
  const { data: shopData } = useShopQuery(shop as string);
  const shopId = shopData?.shop?.id!;
  const { mutate: importAttributes, isLoading: loading } =
    useImportAttributesMutation();

  const handleDrop = async (acceptedFiles: any) => {
    if (acceptedFiles.length) {
      importAttributes({
        shop_id: shopId,
        csv: acceptedFiles[0],
      });
    }
  };

  return (
    <ImportCsv
      onDrop={handleDrop}
      loading={loading}
      title={t("text-import-attributes")}
    />
  );
}
