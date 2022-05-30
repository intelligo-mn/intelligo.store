import { RegisterInput } from "@intelligo/dashboard/ts-types/generated";
import { ROUTES } from "@intelligo/dashboard/utils/routes";
import User from "@intelligo/dashboard/repositories/user";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export interface IRegisterVariables {
  variables: RegisterInput;
}

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables }: IRegisterVariables) =>
      User.register(API_ENDPOINTS.REGISTER, variables),
    {
      onSuccess: () => {
        router.push(ROUTES.USERS);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.USERS);
      },
    }
  );
};
