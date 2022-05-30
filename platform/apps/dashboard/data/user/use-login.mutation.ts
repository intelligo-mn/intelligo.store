import { LoginInput } from "apps/dashboard/src/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/src/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export interface ILoginVariables {
  variables: LoginInput;
}

export const useLoginMutation = () => {
  return useMutation(({ variables }: ILoginVariables) =>
    User.login(API_ENDPOINTS.TOKEN, variables)
  );
};
