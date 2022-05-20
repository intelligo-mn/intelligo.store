import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';
import { toast } from 'react-toastify';
import { authorizationAtom } from '@/store/authorization-atom';
import { useAtom } from 'jotai';
import { useToken } from '@/lib/hooks/use-token';
import {
  CustomerDocument,
  useChangePasswordMutation,
  useCustomerQuery,
  useForgetPasswordMutation,
  useLoginMutation,
  useLogoutMutation,
  useOtpLoginMutation,
  useRegisterMutation,
  useResetPasswordMutation,
  useSendOtpCodeMutation,
  useSocialLoginMutation,
  useUpdateCustomerMutation,
  useVerifyForgetPasswordTokenMutation,
  useVerifyOtpCodeMutation,
} from './gql/auth.graphql';
import { useDeleteAddressMutation } from './gql/address.graphql';
import { useContactUsMutation } from './gql/settings.graphql';
import {
  ChangePasswordInput,
  ContactInput,
  ForgetPasswordInput,
  LoginInput,
  OtpInput,
  OtpLoginInput,
  RegisterInput,
  ResetPasswordInput,
  SocialLoginInput,
  VerifyForgetPasswordTokenInput,
  VerifyOtpInput,
} from '__generated__/__types__';
import type { RegisterUserInput, UpdateUserInput } from '@/types';
import { useApolloClient } from '@apollo/client';
import { useState } from 'react';
import { getErrorMessage } from './utils/form-error';
import { useStateMachine } from 'little-state-machine';
import {
  updateFormState,
  initialState,
} from '@/components/auth/forgot-password';
import { initialOtpState, optAtom } from '@/components/otp/atom';
import { clearCheckoutAtom } from "@/store/checkout";

export function useUser() {
  const [isAuthorized] = useAtom(authorizationAtom);
  const {
    data,
    loading: isLoading,
    error,
  } = useCustomerQuery({
    fetchPolicy: 'network-only',
    skip: !isAuthorized,
    onError: (err) => {
      console.log(err);
    },
  });
  return { me: data?.me, isLoading, error, isAuthorized };
}

export const useDeleteAddress = () => {
  const { closeModal } = useModalAction();
  const [mutate, { loading: isLoading }] = useDeleteAddressMutation({
    refetchQueries: [{ query: CustomerDocument }],
    onCompleted: (data) => {
      closeModal();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  function deleteAddress({ id }: { id: string }) {
    mutate({ variables: { id } });
  }
  return { mutate: deleteAddress, isLoading };
};

export const useUpdateUser = () => {
  const { t } = useTranslation('common');
  const { closeModal } = useModalAction();
  const [updateProfile, { loading: isLoading }] = useUpdateCustomerMutation({
    onCompleted: (data) => {
      if (data?.updateUser?.id) {
        toast.success(t('profile-update-successful'));
        closeModal();
      }
    },
    onError: (err) => {
      toast.error(t('error-something-wrong'));
    },
  });
  function update({ id, address, name, profile }: UpdateUserInput) {
    updateProfile({
      variables: {
        //@ts-ignore
        input: {
          id,
          name,
          ...(profile && {
            profile: {
              upsert: {
                id: profile?.id,
                bio: profile.bio,
                avatar: profile.avatar,
              },
            },
          }),
          ...(address && {
            address: {
              upsert: address,
            },
          }),
        },
      },
    });
  }
  return { mutate: update, isLoading };
};

export const useContact = () => {
  const { t } = useTranslation('common');

  const [mutate, { loading: isLoading }] = useContactUsMutation({
    onCompleted: (data) => {
      if (data?.contactUs?.success) {
        toast.success(t(data.contactUs.message!));
      } else {
        toast.error(t(data?.contactUs?.message!));
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
  function handleSubmit(values: ContactInput) {
    mutate({
      variables: {
        input: values,
      },
    });
  }
  return {
    mutate: handleSubmit,
    isLoading,
  };
};

export function useLogin() {
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  const { setToken } = useToken();
  let [serverError, setServerError] = useState<string | null>(null);
  const [mutate, { loading: isLoading }] = useLoginMutation({
    onCompleted: (data) => {
      if (!data.login?.token) {
        setServerError('error-credential-wrong');
        return;
      }
      setToken(data.login.token);
      setAuthorized(true);
      closeModal();
    },
    onError: (error) => {
      console.log(error.message, 'error');
    },
  });
  function login(values: LoginInput) {
    mutate({
      variables: {
        input: {
          ...values,
        },
      },
    });
  }
  return {
    mutate: login,
    isLoading,
    serverError,
    setServerError,
  };
}
export function useSocialLogin() {
  const client = useApolloClient();
  const { t } = useTranslation('common');
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { setToken } = useToken();
  const [mutate, { loading: isLoading, error }] = useSocialLoginMutation({
    onCompleted: (data) => {
      if (data?.socialLogin?.token && data?.socialLogin?.permissions?.length) {
        setToken(data?.socialLogin?.token);
        setAuthorized(true);
        client.resetStore();
      } else {
        toast.error(t('error-credential-wrong'));
      }
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  function handleSubmit(input: SocialLoginInput) {
    mutate({
      variables: {
        input,
      },
    });
  }
  return {
    mutate: handleSubmit,
    isLoading,
    error,
  };
}

export function useOtpLogin() {
  const [otpState, setOtpState] = useAtom(optAtom);
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  const { setToken } = useToken();
  let [serverError, setServerError] = useState<string | null>(null);
  const [otpLogin, { loading: isLoading }] = useOtpLoginMutation({
    onCompleted: (data) => {
      if (!data?.otpLogin?.token && !data?.otpLogin?.permissions?.length) {
        setServerError('text-otp-verify-failed');
        return;
      }
      setToken(data?.otpLogin?.token!);
      setAuthorized(true);
      setOtpState({
        ...initialOtpState,
      });
      closeModal();
    },
    onError: (err) => {
      console.log(err);
      // setError(err.message);
    },
  });
  function handleSubmit(input: OtpLoginInput) {
    otpLogin({
      variables: {
        input: {
          ...input,
          phone_number: otpState.phoneNumber,
          otp_id: otpState.otpId!,
        },
      },
    });
  }
  return {
    mutate: handleSubmit,
    isLoading,
    serverError,
    setServerError,
  };
}
export function useSendOtpCode() {
  const [otpState, setOtpState] = useAtom(optAtom);
  let [serverError, setServerError] = useState<string | null>(null);
  const [mutate, { loading: isLoading }] = useSendOtpCodeMutation({
    onCompleted: (data) => {
      if (!data?.sendOtpCode?.success) {
        setServerError(data?.sendOtpCode?.message!);
        return;
      }
      setOtpState({
        ...otpState,
        otpId: data?.sendOtpCode?.id!,
        isContactExist: data?.sendOtpCode?.is_contact_exist!,
        phoneNumber: data?.sendOtpCode?.phone_number!,
        step: data?.sendOtpCode?.is_contact_exist! ? 'OtpForm' : 'RegisterForm',
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  function sendOtpCode(input: OtpInput) {
    mutate({
      variables: { input },
    });
  }
  return { mutate: sendOtpCode, isLoading, serverError, setServerError };
}
export function useVerifyOtpCode({
  onVerifySuccess,
}: {
  onVerifySuccess: Function;
}) {
  const [otpState, setOtpState] = useAtom(optAtom);
  let [serverError, setServerError] = useState<string | null>(null);
  const [mutate, { loading: isLoading }] = useVerifyOtpCodeMutation({
    onCompleted: (data) => {
      if (!data?.verifyOtpCode?.success) {
        setServerError(data?.verifyOtpCode?.message!);
        return;
      }
      if (onVerifySuccess) {
        onVerifySuccess({
          phone_number: otpState.phoneNumber,
        });
      }
      setOtpState({
        ...initialOtpState,
      });
    },
    onError: (error: any) => {
      //FIXME: need to handle error message properly
      toast.error(error.message);
    },
  });
  function onVerify(input: VerifyOtpInput) {
    mutate({
      variables: {
        input: {
          ...input,
        },
      },
    });
  }
  return { mutate: onVerify, isLoading, serverError, setServerError };
}
export function useRegister() {
  const { t } = useTranslation('common');
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  let [formError, setFormError] = useState<Partial<RegisterUserInput> | null>(
    null
  );
  const [registerUser, { loading: isLoading }] = useRegisterMutation({
    onCompleted: (data) => {
      if (data?.register?.token && data?.register?.permissions?.length) {
        setToken(data?.register?.token);
        setAuthorized(true);
        closeModal();
      } else {
        toast.error(t('error-credential-wrong'));
      }
    },
    onError: (error) => {
      const serverErrors = getErrorMessage(error);
      setFormError(
        Object.fromEntries(
          Object.entries(serverErrors?.validation).map(([k, v]) => [
            k.split('.')[1],
            v,
          ])
        )
      );
    },
  });
  function register(values: RegisterInput) {
    registerUser({
      variables: {
        input: {
          ...values,
        },
      },
    });
  }
  return { mutate: register, isLoading, formError };
}
export function useLogout() {
  const client = useApolloClient();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const [_r, resetCheckout] = useAtom(clearCheckoutAtom);

  const [signOut] = useLogoutMutation({
    onCompleted: (data) => {
      if (data?.logout) {
        setToken('');
        setAuthorized(false);
        resetCheckout()
        client.resetStore();
      }
    },
  });
  return {
    mutate: signOut,
  };
}
export function useChangePassword() {
  const { t } = useTranslation('common');
  const [changePassword, { loading: isLoading }] = useChangePasswordMutation();
  let [formError, setFormError] = useState<Partial<ChangePasswordInput> | null>(
    null
  );
  function change(input: ChangePasswordInput) {
    changePassword({
      variables: {
        input,
      },
      onCompleted: (data) => {
        if (!data?.changePassword?.success) {
          setFormError({
            oldPassword: data?.changePassword?.message ?? '',
          });
          return;
        }
        toast.success(t('password-successful'));
      },
    });
  }
  return { mutate: change, isLoading, formError };
}
export function useForgotPassword() {
  const { actions } = useStateMachine({ updateFormState });
  let [message, setMessage] = useState<string | null>(null);
  let [formError, setFormError] = useState<any>(null);

  const [forgetPassword, { loading: isLoading }] = useForgetPasswordMutation();
  function forget(input: ForgetPasswordInput) {
    forgetPassword({
      variables: {
        input,
      },
      onCompleted: (res) => {
        if (!res?.forgetPassword?.success) {
          setFormError({ email: res?.forgetPassword?.message! });
          return;
        }
        setMessage(res?.forgetPassword?.message!);
        actions.updateFormState({
          email: input.email,
          step: 'Token',
        });
      },
    });
  }
  return { mutate: forget, isLoading, message, formError };
}
export function useResetPassword() {
  const { openModal } = useModalAction();
  const [resetPassword, { loading: isLoading }] = useResetPasswordMutation();
  const { actions } = useStateMachine({ updateFormState });
  function reset(input: ResetPasswordInput) {
    resetPassword({
      variables: {
        input,
      },
      onCompleted: (res) => {
        if (res?.resetPassword?.success) {
          toast.success('Successfully Reset Password!');
          actions.updateFormState({
            ...initialState,
          });
          openModal('LOGIN_VIEW');
        }
      },
    });
  }
  return { mutate: reset, isLoading };
}
export function useVerifyForgotPasswordToken() {
  const { actions } = useStateMachine({ updateFormState });
  const [verifyToken, { loading: isLoading }] =
    useVerifyForgetPasswordTokenMutation();
  let [formError, setFormError] = useState<any>(null);

  function verify(input: VerifyForgetPasswordTokenInput) {
    verifyToken({
      variables: {
        input,
      },
      onCompleted: (res) => {
        if (!res.verifyForgetPasswordToken?.success) {
          setFormError({ token: res.verifyForgetPasswordToken?.message! });
          return;
        }
        actions.updateFormState({
          step: 'Password',
          token: input.token,
        });
      },
    });
  }
  return { mutate: verify, isLoading, formError };
}
