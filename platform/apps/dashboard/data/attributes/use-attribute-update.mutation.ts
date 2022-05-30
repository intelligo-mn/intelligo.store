import { AttributeInput } from "apps/dashboard/src/ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Attribute from "apps/dashboard/src/repositories/attribute";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";
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
