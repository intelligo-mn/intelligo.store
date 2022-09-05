import { AttributeValueCreateInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import AttributeValue from "@repositories/attribute-value";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

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
