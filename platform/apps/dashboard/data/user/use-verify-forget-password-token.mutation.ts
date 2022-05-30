import { VerifyForgetPasswordTokenInput } from "apps/dashboard/src/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/src/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export interface IVerifyForgetPassVerifyToken {
  variables: { input: VerifyForgetPasswordTokenInput };
}
export const useVerifyForgetPasswordTokenMutation = () => {
  return useMutation(({ variables: { input } }: IVerifyForgetPassVerifyToken) =>
    User.forgetPassword(API_ENDPOINTS.VERIFY_FORGET_PASSWORD_TOKEN, input)
  );
};
