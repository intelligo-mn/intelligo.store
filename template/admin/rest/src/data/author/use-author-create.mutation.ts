import { CreateAuthorInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import Author from "@repositories/author";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IAuthorCreateVariables {
  variables: { input: CreateAuthorInput };
}

export const useCreateAuthorMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    query: { shop },
  } = router;

  return useMutation(
    ({ variables: { input } }: IAuthorCreateVariables) =>
      Author.create(API_ENDPOINTS.AUTHORS, input),
    {
      onSuccess: () => {
        if (shop) {
          router.push(`/${shop}${ROUTES.AUTHORS}`);
        } else {
          router.push(ROUTES.AUTHORS);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.AUTHORS);
      },
    }
  );
};
