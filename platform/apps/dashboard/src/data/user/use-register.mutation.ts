import { RegisterInput } from "@intelligo/dashboard/ts-types/generated";
import { useMutation } from "react-query";
import User from "@intelligo/dashboard/repositories/user";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export interface IRegisterVariables {
  variables: RegisterInput;
}

export const useRegisterMutation = () => {
  return useMutation(({ variables }: IRegisterVariables) =>
    User.register(API_ENDPOINTS.REGISTER, variables)
  );
};
