import Shop from "@repositories/shop";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
export interface IShopApproveVariables {
  variables: {
    id: string;
  };
}

export const useDisApproveShopMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables }: IShopApproveVariables) =>
      Shop.disapprove(API_ENDPOINTS.DISAPPROVE_SHOP, variables),
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
