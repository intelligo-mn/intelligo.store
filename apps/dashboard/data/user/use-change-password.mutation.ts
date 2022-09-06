import { ChangePasswordInput } from "apps/dashboard/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";

export interface IChangePassVariables {
  variables: { input: ChangePasswordInput };
}

export const useChangePasswordMutation = () => {
  return useMutation(({ variables: { input } }: IChangePassVariables) =>
    User.changePassword(API_ENDPOINTS.CHANGE_PASSWORD, input)
  );
};
