import { CreateCategory } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import Category from "@repositories/category";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface ICategoryCreateVariables {
  variables: { input: CreateCategory };
}

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: ICategoryCreateVariables) =>
      Category.create(API_ENDPOINTS.CATEGORIES, input),
    {
      onSuccess: () => {
        router.push(ROUTES.CATEGORIES);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.CATEGORIES);
      },
    }
  );
};
