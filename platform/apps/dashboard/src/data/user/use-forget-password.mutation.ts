import { ForgetPasswordInput } from "@intelligo/dashboard/ts-types/generated";
import { useMutation } from "react-query";
import User from "@intelligo/dashboard/repositories/user";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export interface IForgetPassVariables {
  variables: { input: ForgetPasswordInput };
}

export const useForgetPasswordMutation = () => {
  return useMutation(({ variables: { input } }: IForgetPassVariables) =>
    User.forgetPassword(API_ENDPOINTS.FORGET_PASSWORD, input)
  );
};
