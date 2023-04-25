import { AttributeValueUpdateInput } from "@ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import AttributeValue from "@repositories/attribute-value";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { useTranslation } from "next-i18next";

export interface IAttributeValueUpdateVariables {
  variables: {
    id: number | string;
    input: AttributeValueUpdateInput;
  };
}

export const useUpdateAttributeValueMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { id, input } }: IAttributeValueUpdateVariables) =>
      AttributeValue.update(`${API_ENDPOINTS.ATTRIBUTE_VALUES}/${id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ATTRIBUTE_VALUES);
      },
    }
  );
};
