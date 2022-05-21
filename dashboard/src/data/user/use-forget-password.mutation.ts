import { ForgetPasswordInput } from "@ts-types/generated";
import { useMutation } from "react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IForgetPassVariables {
  variables: { input: ForgetPasswordInput };
}

export const useForgetPasswordMutation = () => {
  return useMutation(({ variables: { input } }: IForgetPassVariables) =>
    User.forgetPassword(API_ENDPOINTS.FORGET_PASSWORD, input)
  );
};
