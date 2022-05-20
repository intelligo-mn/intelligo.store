import ImportCsv from "@components/ui/import-csv";
import useAttribute from "@core/attribute/useAttribute";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function ImportAttributes() {
  const { t } = useTranslation();
  const { loading } = useAttribute();
  const {
    query: { shop },
  } = useRouter();
  // const { data: shopData } = useShopQuery({
  //   variables: {
  //     slug: shop as string,
  //   },
  // });
  // const shopId = shopData?.organization?.id!;
  // const [importAttributes, { loading }] = useImportAttributesMutation({
  //   onCompleted: () => {
  //     toast.success(t("common:attribute-imported-successfully"));
  //   },
  //   onError: (error: any) => {
  //     toast.error(t(`common:${error?.message}`));
  //   },
  // });

  const handleDrop = async (acceptedFiles: any) => {
    if (acceptedFiles.length) {
      // await importAttributes({
      //   variables: {
      //     shop_id: shopId,
      //     csv: acceptedFiles[0],
      //   },
      // });
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
