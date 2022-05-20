import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../';
import { UpdateCustomerInput } from '../../API';
import { convertCognitoUser } from '../../helpers/cognito-helper';
import { setAuthLoading } from '../../reducers';
import { setAuth } from '../../reducers/auth.reducer';
import { validation } from '../../validations';

export const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const login = (username: string, password: string): Promise<any> => {
    dispatch(setAuthLoading(true));
    return new Promise<void>((resolve, reject) => {
      const fullUsername = validation.email.test(username)
        ? username
        : `+976${username}`;
      Auth.signIn(fullUsername, password)
        .then((cogUser) => {
          dispatch(
            setAuth({
              user: convertCognitoUser(cogUser),
            }),
          );
          resolve();
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => dispatch(setAuthLoading(false)));
    });
  };

  const logout = async () => {
    dispatch(setAuthLoading(true));
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

  const currentUser = async () => {
    try {
      const cogUser = await Auth.currentAuthenticatedUser();

      dispatch(
        setAuth({
          user: convertCognitoUser(cogUser),
        }),
      );
    } catch (error: any) {}
  };

  const registerConfirm = async (
    username: string,
    password: string,
    code: string,
  ) => {
    let isValidEmail = validation.email.test(username);
    dispatch(setAuthLoading(true));
    return new Promise((resolve, reject) => {
      username = isValidEmail ? username : `+976${username}`;
      Auth.confirmSignUp(username, code)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });

      dispatch(setAuthLoading(false));
    });
  };

  const signUp = async (username: string, password: string): Promise<any> => {
    let isValidEmail = validation.email.test(username);

    dispatch(setAuthLoading(true));

    return new Promise((resolve, reject) => {
      username = isValidEmail ? username : `+976${username}`;
      Auth.signUp({
        username: username,
        password: password,
        attributes: isValidEmail
          ? {
              email: username,
              name: username,
            }
          : {
              phone_number: username,
              name: username,
            },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });

      dispatch(setAuthLoading(false));
    });
  };

  const resendSignUp = async (username: string): Promise<any> => {
    dispatch(setAuthLoading(true));
    return new Promise((resolve, reject) => {
      Auth.changePassword;
      Auth.resendSignUp(username)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          dispatch(setAuthLoading(false));
        });
    });
  };

  const updateCustomerCognito = async (data: UpdateCustomerInput) => {
    dispatch(setAuthLoading(true));
    const user = await Auth.currentAuthenticatedUser();
    return new Promise((resolve, reject) => {
      Auth.updateUserAttributes(user, data)
        .then(resolve)
        .catch(reject)
        .finally(() => dispatch(setAuthLoading(false)));
    });
  };

  return {
    ...auth,
    login,
    logout,
    currentUser,
    signUp,
    registerConfirm,
    resendSignUp,
    updateCustomerCognito,
  };
};

export default useAuth;
