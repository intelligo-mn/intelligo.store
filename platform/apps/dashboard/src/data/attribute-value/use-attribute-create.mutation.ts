import { AttributeValueCreateInput } from "@intelligo/dashboard/ts-types/generated";
import { ROUTES } from "@intelligo/dashboard/utils/routes";
import AttributeValue from "@intelligo/dashboard/repositories/attribute-value";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export interface IAttributeValueCreateVariables {
  variables: {
    input: AttributeValueCreateInput;
  };
}

export const useCreateAttributeValueMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: IAttributeValueCreateVariables) =>
      AttributeValue.create(API_ENDPOINTS.ATTRIBUTE_VALUES, input),
    {
      onSuccess: () => {
        router.push(ROUTES.ATTRIBUTE_VALUES);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ATTRIBUTE_VALUES);
      },
    }
  );
};
