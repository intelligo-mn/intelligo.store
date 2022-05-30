import { ShippingInput } from "apps/dashboard/src/ts-types/generated";
import { ROUTES } from "apps/dashboard/src/utils/routes";
import Shipping from "apps/dashboard/src/repositories/shipping";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export interface IShippingCreateVariables {
  variables: {
    input: ShippingInput;
  };
}

export const useCreateShippingClassMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: IShippingCreateVariables) =>
      Shipping.create(API_ENDPOINTS.SHIPPINGS, input),
    {
      onSuccess: () => {
        router.push(ROUTES.SHIPPINGS);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.SHIPPINGS);
      },
    }
  );
};
