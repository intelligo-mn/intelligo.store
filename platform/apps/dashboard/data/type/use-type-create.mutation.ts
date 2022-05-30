import { CreateTypeInput } from "apps/dashboard/ts-types/generated";
import { ROUTES } from "apps/dashboard/utils/routes";
import Type from "apps/dashboard/repositories/type";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export interface ITypeCreateVariables {
  variables: {
    input: CreateTypeInput;
  };
}

export const useCreateTypeMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: ITypeCreateVariables) =>
      Type.create(API_ENDPOINTS.TYPES, input),
    {
      onSuccess: () => {
        router.push(ROUTES.BRANDS);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.TYPES);
      },
    }
  );
};
