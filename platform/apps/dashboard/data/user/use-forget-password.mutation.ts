import { ForgetPasswordInput } from "apps/dashboard/src/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/src/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export interface IForgetPassVariables {
  variables: { input: ForgetPasswordInput };
}

export const useForgetPasswordMutation = () => {
  return useMutation(({ variables: { input } }: IForgetPassVariables) =>
    User.forgetPassword(API_ENDPOINTS.FORGET_PASSWORD, input)
  );
};
