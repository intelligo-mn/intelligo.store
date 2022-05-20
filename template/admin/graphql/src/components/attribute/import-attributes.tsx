import { useTranslation } from "next-i18next";
import { useImportAttributesMutation } from "@graphql/attributes.graphql";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useShopQuery } from "@graphql/shops.graphql";
import ImportCsv from "@components/ui/import-csv";

export default function ImportAttributes() {
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
  const [importAttributes, { loading }] = useImportAttributesMutation({
    onCompleted: () => {
      toast.success(t("common:attribute-imported-successfully"));
    },
    onError: (error: any) => {
      toast.error(t(`common:${error?.message}`));
    },
  });

  const handleDrop = async (acceptedFiles: any) => {
    if (acceptedFiles.length) {
      await importAttributes({
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
      title={t("text-import-attributes")}
    />
  );
}
