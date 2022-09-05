import { ShopInput } from "@ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Shop from "@repositories/shop";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { useTranslation } from "next-i18next";
export interface IShopUpdateVariables {
  variables: {
    id: string;
    input: ShopInput;
  };
}

export const useUpdateShopMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { id, input } }: IShopUpdateVariables) =>
      Shop.update(`${API_ENDPOINTS.SHOPS}/${id}`, input),
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
