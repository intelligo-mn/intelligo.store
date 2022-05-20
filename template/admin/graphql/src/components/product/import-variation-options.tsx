import { useTranslation } from "next-i18next";
import { useImportVariationOptionsMutation } from "@graphql/products.graphql";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useShopQuery } from "@graphql/shops.graphql";
import ImportCsv from "@components/ui/import-csv";

export default function ImportVariationOptions() {
  const { t } = useTranslation();
  const {
    query: { shop },
  } = useRouter();
  const { data: shopData } = useShopQuery({
    variables: {
      slug: shop as string,
    },
  });
  const shopId = shopData?.shop?.id!;
  const [importVariationOptions, { loading }] =
    useImportVariationOptionsMutation({
      onCompleted: () => {
        toast.success(t("common:variations-imported-successfully"));
      },
      onError: (error: any) => {
        toast.error(t(`common:${error?.message}`));
      },
    });

  const handleDrop = async (acceptedFiles: any) => {
    if (acceptedFiles.length) {
      await importVariationOptions({
        variables: {
          shop_id: shopId,
          csv: acceptedFiles[0],
        },
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
