import { RegisterInput } from "apps/dashboard/src/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/src/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export interface IRegisterVariables {
  variables: RegisterInput;
}

export const useRegisterMutation = () => {
  return useMutation(({ variables }: IRegisterVariables) =>
    User.register(API_ENDPOINTS.REGISTER, variables)
  );
};
