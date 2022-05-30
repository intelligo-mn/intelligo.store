import { AttributeInput } from "@intelligo/dashboard/ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Attribute from "@intelligo/dashboard/repositories/attribute";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";
import { useTranslation } from "next-i18next";

export interface IAttributeUpdateVariables {
  variables: {
    id: number | string;
    input: AttributeInput;
  };
}

export const useUpdateAttributeMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { id, input } }: IAttributeUpdateVariables) =>
      Attribute.update(`${API_ENDPOINTS.ATTRIBUTES}/${id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ATTRIBUTES);
      },
    }
  );
};
