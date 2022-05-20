import { LoginInput } from "@ts-types/generated";
import { useMutation } from "react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface ILoginVariables {
  variables: LoginInput;
}

export const useLoginMutation = () => {
  return useMutation(({ variables }: ILoginVariables) =>
    User.login(API_ENDPOINTS.TOKEN, variables)
  );
};
