import { CreateTypeInput } from "apps/dashboard/src/ts-types/generated";
import { ROUTES } from "apps/dashboard/src/utils/routes";
import Type from "apps/dashboard/src/repositories/type";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

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
