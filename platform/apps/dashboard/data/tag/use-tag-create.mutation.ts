import { CreateTag } from "apps/dashboard/src/ts-types/generated";
import { ROUTES } from "apps/dashboard/src/utils/routes";
import Tag from "apps/dashboard/src/repositories/tag";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export interface ITagCreateVariables {
  variables: { input: CreateTag };
}

export const useCreateTagMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: ITagCreateVariables) =>
      Tag.create(API_ENDPOINTS.TAGS, input),
    {
      onSuccess: () => {
        router.push(ROUTES.TAGS);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.TAGS);
      },
    }
  );
};
