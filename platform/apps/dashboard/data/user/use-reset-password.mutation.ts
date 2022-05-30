import { ResetPasswordInput } from "apps/dashboard/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export interface IResetPassword {
  variables: { input: ResetPasswordInput };
}

export const useResetPasswordMutation = () => {
  return useMutation(({ variables: { input } }: IResetPassword) =>
    User.forgetPassword(API_ENDPOINTS.FORGET_PASSWORD, input)
  );
};
