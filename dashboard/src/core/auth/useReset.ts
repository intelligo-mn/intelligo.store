import { Auth } from "aws-amplify";
import { useState } from "react";

export const useReset = () => {
  const [loading, setLoading] = useState<boolean>();

  const forgotPassword = (username: string) => {
    return new Promise((resolve, reject) => {
      Auth.forgotPassword(username)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => reject(error))
        .finally(() => {});
    });
  };

  const forgotPasswordSubmit = async (
    email: string,
    code: string,
    newPassword: string
  ) => {
    return new Promise((resolve, reject) => {
      Auth.forgotPasswordSubmit(email, code, newPassword)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {});
    });
  };

  const changePassword = async (oldPassword: string, newPassword: string) => {
    const user = await Auth.currentAuthenticatedUser();
    return new Promise((resolve, reject) => {
      Auth.changePassword(user, oldPassword, newPassword)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {});
    });
  };

  return {
    loading,
    changePassword,
    forgotPassword,
    forgotPasswordSubmit,
  };
};

export default useReset;
