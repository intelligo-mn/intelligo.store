import { ResetPasswordInput } from "apps/dashboard/src/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/src/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export interface IResetPassword {
  variables: { input: ResetPasswordInput };
}

export const useResetPasswordMutation = () => {
  return useMutation(({ variables: { input } }: IResetPassword) =>
    User.forgetPassword(API_ENDPOINTS.FORGET_PASSWORD, input)
  );
};
