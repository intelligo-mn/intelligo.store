import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../';
import { setAuthLoading } from '../../reducers';
import { validation } from '../../validations';

export const useReset = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const forgotPassword = (username: string) => {
    dispatch(setAuthLoading(true));
    return new Promise((resolve, reject) => {
      const isValidPhone = validation.phone.test(username);
      username = isValidPhone ? `+976${username}` : username;
      Auth.forgotPassword(username)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => reject(error))
        .finally(() => dispatch(setAuthLoading(false)));
    });
  };

  const forgotPasswordSubmit = async (
    email: string,
    code: string,
    newPassword: string,
  ) => {
    dispatch(setAuthLoading(true));
    return new Promise((resolve, reject) => {
      let isValidPhone = validation.phone.test(email);
      email = isValidPhone ? `+976${email}` : email;

      Auth.forgotPasswordSubmit(email, code, newPassword)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => dispatch(setAuthLoading(false)));
    });
  };

  const changePassword = async (oldPassword: string, newPassword: string) => {
    dispatch(setAuthLoading(true));

    const user = await Auth.currentAuthenticatedUser();
    return new Promise((resolve, reject) => {
      Auth.changePassword(user, oldPassword, newPassword)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => dispatch(setAuthLoading(false)));
    });
  };

  return {
    ...auth,
    changePassword,
    forgotPassword,
    forgotPasswordSubmit,
  };
};

export default useReset;
