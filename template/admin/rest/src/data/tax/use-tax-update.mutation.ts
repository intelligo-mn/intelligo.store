import { TaxUpdateInput } from "@ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Tax from "@repositories/tax";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { useTranslation } from "next-i18next";
export interface ITaxUpdateVariables {
  variables: {
    id: number | string;
    input: TaxUpdateInput;
  };
}

export const useUpdateTaxClassMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { id, input } }: ITaxUpdateVariables) =>
      Tax.update(`${API_ENDPOINTS.TAXES}/${id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.TAXES);
      },
    }
  );
};
