import { VerifyForgetPasswordTokenInput } from "@ts-types/generated";
import { useMutation } from "react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IVerifyForgetPassVerifyToken {
  variables: { input: VerifyForgetPasswordTokenInput };
}
export const useVerifyForgetPasswordTokenMutation = () => {
  return useMutation(({ variables: { input } }: IVerifyForgetPassVerifyToken) =>
    User.forgetPassword(API_ENDPOINTS.VERIFY_FORGET_PASSWORD_TOKEN, input)
  );
};
