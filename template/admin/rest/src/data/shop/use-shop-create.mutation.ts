import { ShopInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import Shop from "@repositories/shop";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { adminOnly, getAuthCredentials, hasAccess } from "@utils/auth-utils";

export interface IShopCreateVariables {
  variables: {
    input: ShopInput;
  };
}

export const useCreateShopMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: IShopCreateVariables) =>
      Shop.create(API_ENDPOINTS.SHOPS, input),
    {
      onSuccess: () => {
        const { permissions } = getAuthCredentials();
        if (hasAccess(adminOnly, permissions)) {
          return router.push(ROUTES.ADMIN_MY_SHOPS);
        }
        router.push(ROUTES.DASHBOARD);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.SHOPS);
      },
    }
  );
};
