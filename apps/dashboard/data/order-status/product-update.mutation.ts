import { OrderStatusUpdateInput } from "@ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import OrderStatus from "@repositories/order-status";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { useTranslation } from "next-i18next";

export interface IOrderStatusUpdateVariables {
  variables: {
    id: number | string;
    input: OrderStatusUpdateInput;
  };
}

export const useUpdateOrderStatusMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { id, input } }: IOrderStatusUpdateVariables) =>
      OrderStatus.update(`${API_ENDPOINTS.ORDER_STATUS}/${id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ORDER_STATUS);
      },
    }
  );
};
