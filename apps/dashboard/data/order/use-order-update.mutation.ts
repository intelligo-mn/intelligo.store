import { UpdateOrder } from "@ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import Order from "@repositories/order";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";

export interface IOrderUpdateVariables {
  variables: { id: string; input: UpdateOrder };
}

export const useUpdateOrderMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  return useMutation(
    ({ variables: { id, input } }: IOrderUpdateVariables) =>
      Order.update(`${API_ENDPOINTS.ORDERS}/${id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:update-success"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ORDERS);
      },
    }
  );
};
