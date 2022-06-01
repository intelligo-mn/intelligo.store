import { useMutation, useQueryClient } from "react-query";
import Import from "@repositories/import";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";

type Input = {
  shop_id: string;
  csv: any;
};
export const useImportAttributesMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation("common");

  return useMutation(
    (input: Input) => {
      return Import.importCsv(API_ENDPOINTS.IMPORT_ATTRIBUTES, input);
    },
    {
      onSuccess: () => {
        toast.success(t("common:attribute-imported-successfully"));
      },
      onError: (error: any) => {
        toast.error(t(`common:${error?.response?.data.message}`));
      },
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ATTRIBUTES);
      },
    }
  );
};
