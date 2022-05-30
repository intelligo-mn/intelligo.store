import { TaxInput } from "apps/dashboard/ts-types/generated";
import { ROUTES } from "apps/dashboard/utils/routes";
import Tax from "apps/dashboard/repositories/tax";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

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
