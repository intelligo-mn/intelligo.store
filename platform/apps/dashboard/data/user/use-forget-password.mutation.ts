import { ForgetPasswordInput } from "apps/dashboard/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export interface IForgetPassVariables {
  variables: { input: ForgetPasswordInput };
}

export const useForgetPasswordMutation = () => {
  return useMutation(({ variables: { input } }: IForgetPassVariables) =>
    User.forgetPassword(API_ENDPOINTS.FORGET_PASSWORD, input)
  );
};
