import { useMutation } from "react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { AUTH_CRED } from "@utils/constants";
import { ROUTES } from "@utils/routes";

export const useLogoutMutation = () => {
  const router = useRouter();

  return useMutation(() => User.logout(API_ENDPOINTS.LOGOUT), {
    onSuccess: () => {
      Cookies.remove(AUTH_CRED);
      router.replace(ROUTES.LOGIN);
    },
  });
};
