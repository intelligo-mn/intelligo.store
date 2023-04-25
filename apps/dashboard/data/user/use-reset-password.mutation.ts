import { ResetPasswordInput } from "@ts-types/generated";
import { useMutation } from "react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IResetPassword {
  variables: { input: ResetPasswordInput };
}

export const useResetPasswordMutation = () => {
  return useMutation(({ variables: { input } }: IResetPassword) =>
    User.forgetPassword(API_ENDPOINTS.FORGET_PASSWORD, input)
  );
};
