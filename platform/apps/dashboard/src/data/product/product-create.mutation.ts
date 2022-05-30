import { CreateProduct } from "@intelligo/dashboard/ts-types/generated";
import { ROUTES } from "@intelligo/dashboard/utils/routes";
import Product from "@intelligo/dashboard/repositories/product";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    (input: CreateProduct) => Product.create(API_ENDPOINTS.PRODUCTS, input),
    {
      onSuccess: () => {
        router.push(`/${router?.query?.shop}${ROUTES.PRODUCTS}`);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.PRODUCTS);
      },
    }
  );
};
