import { ChangePasswordInput } from "@ts-types/generated";
import { useMutation } from "react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IChangePassVariables {
  variables: { input: ChangePasswordInput };
}

export const useChangePasswordMutation = () => {
  return useMutation(({ variables: { input } }: IChangePassVariables) =>
    User.changePassword(API_ENDPOINTS.CHANGE_PASSWORD, input)
  );
};
