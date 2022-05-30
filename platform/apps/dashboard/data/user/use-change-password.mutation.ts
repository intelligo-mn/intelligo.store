import { ChangePasswordInput } from "apps/dashboard/src/ts-types/generated";
import { useMutation } from "react-query";
import User from "apps/dashboard/src/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

export interface IChangePassVariables {
  variables: { input: ChangePasswordInput };
}

export const useChangePasswordMutation = () => {
  return useMutation(({ variables: { input } }: IChangePassVariables) =>
    User.changePassword(API_ENDPOINTS.CHANGE_PASSWORD, input)
  );
};
