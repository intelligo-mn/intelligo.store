import { TaxInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import Tax from "@repositories/tax";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface ITaxCreateVariables {
  variables: {
    input: TaxInput;
  };
}

export const useCreateTaxClassMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: ITaxCreateVariables) =>
      Tax.create(API_ENDPOINTS.TAXES, input),
    {
      onSuccess: () => {
        router.push(ROUTES.TAXES);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.TAXES);
      },
    }
  );
};
