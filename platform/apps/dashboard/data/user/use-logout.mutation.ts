import { useMutation } from "react-query";
import User from "apps/dashboard/repositories/user";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { AUTH_CRED } from "apps/dashboard/utils/constants";
import { ROUTES } from "apps/dashboard/utils/routes";

export const useLogoutMutation = () => {
  const router = useRouter();

  return useMutation(() => User.logout(API_ENDPOINTS.LOGOUT), {
    onSuccess: () => {
      Cookies.remove(AUTH_CRED);
      router.replace(ROUTES.LOGIN);
    },
  });
};
