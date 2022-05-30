import { ApproveShopInput } from "@intelligo/dashboard/ts-types/generated";
import Shop from "@intelligo/dashboard/repositories/shop";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
export interface IShopApproveVariables {
  variables: {
    input: ApproveShopInput;
  };
}

export const useApproveShopMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { input } }: IShopApproveVariables) =>
      Shop.approve(API_ENDPOINTS.APPROVE_SHOP, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.SHOPS);
      },
    }
  );
};
