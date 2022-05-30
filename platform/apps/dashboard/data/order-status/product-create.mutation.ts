import { OrderStatusInput } from "apps/dashboard/ts-types/generated";
import { ROUTES } from "apps/dashboard/utils/routes";
import OrderStatus from "apps/dashboard/repositories/order-status";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export interface IOrderStatusCreateVariables {
  variables: {
    input: OrderStatusInput;
  };
}

export const useCreateOrderStatusMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: IOrderStatusCreateVariables) =>
      OrderStatus.create(API_ENDPOINTS.ORDER_STATUS, input),
    {
      onSuccess: () => {
        router.push(ROUTES.ORDER_STATUS);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ORDER_STATUS);
      },
    }
  );
};
