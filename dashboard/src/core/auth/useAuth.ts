import { Auth } from "aws-amplify";
import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>();
  const login = (username: string, password: string): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      Auth.signIn(username, password)
        .then((cogUser) => {
          setLoading(false);
          resolve();
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => setLoading(false));
    });
  };

  const logout = async () => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      Auth.signOut()
        .then((res) => {
          logout();
          resolve(res);
        })
        .catch((error) => {
          logout();
          reject(error);
        });
    });
  };

  const registerConfirm = async (
    username: string,
    password: string,
    code: string
  ) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      Auth.confirmSignUp(username, code)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const signUp = async (username: string, password: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: username,
          name: username,
        },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const resendSignUp = async (username: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      Auth.resendSignUp(username)
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
    login,
    logout,
    signUp,
    registerConfirm,
    resendSignUp,
  };
};

export default useAuth;
