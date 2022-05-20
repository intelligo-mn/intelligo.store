import * as yup from 'yup';
import type { SubmitHandler } from 'react-hook-form';
import type {
  ForgotPasswordUserInput,
  ResetPasswordUserInput,
  VerifyForgotPasswordUserInput,
} from '@/types';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import Button from '@/components/ui/button';

import {
  StateMachineProvider,
  createStore,
  useStateMachine,
  GlobalState,
} from 'little-state-machine';
import { useModalAction } from '@/components/ui/modal/modal.context';
import PasswordInput from '@/components/ui/forms/password-input';
import {
  useForgotPassword,
  useVerifyForgotPasswordToken,
  useResetPassword,
} from '@/framework/user';
import { useTranslation } from 'next-i18next';
import Logo from '@/components/ui/logo';
import Alert from '../ui/alert';
import { ArrowPrevIcon } from '../icons/arrow-prev';
import { ArrowNextIcon } from '../icons/arrow-next';

const emailFormValidation = yup.object().shape({
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
});
const tokenFormValidation = yup.object().shape({
  token: yup.string().required('error-password-required'),
});
const passwordFormValidation = yup.object().shape({
  password: yup.string().required(),
});

function EmailForm({
  email,
  onSubmit,
  isLoading,
  serverError,
}: {
  email: string;
  onSubmit: SubmitHandler<Pick<ForgotPasswordUserInput, 'email'>>;
  isLoading: boolean;
  serverError: any;
}) {
  const { t } = useTranslation('common');
  return (
    <Form<Pick<ForgotPasswordUserInput, 'email'>>
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: { email },
      }}
      validationSchema={emailFormValidation}
      serverError={serverError && t(serverError)}
      className="text-left"
    >
      {({ register, formState: { errors } }) => (
        <>
          <Input
            label={t('text-email')}
            type="email"
            {...register('email')}
            error={t(errors.email?.message!)}
          />
          <Button
            type="submit"
            className="!mt-5 w-full text-sm tracking-[0.2px] lg:!mt-6"
            loading={isLoading}
            disabled={isLoading}
          >
            {t('text-submit-email')}
            <ArrowNextIcon className="w-5" />
          </Button>
        </>
      )}
    </Form>
  );
}

function TokenForm({
  token,
  onSubmit,
  isLoading,
  serverError,
  handlePrevStep,
}: {
  token: string;
  onSubmit: SubmitHandler<Pick<VerifyForgotPasswordUserInput, 'token'>>;
  isLoading: boolean;
  serverError: any;
  handlePrevStep: () => void;
}) {
  const { t } = useTranslation('common');
  return (
    <Form<Pick<VerifyForgotPasswordUserInput, 'token'>>
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: { token },
      }}
      validationSchema={tokenFormValidation}
      serverError={serverError}
    >
      {({ register, formState: { errors } }) => (
        <>
          <Input
            label={t('token-label')}
            {...register('token')}
            error={t(errors.token?.message!)}
          />
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            <Button
              onClick={handlePrevStep}
              className="order-1 w-full !bg-cyan-500 text-sm tracking-[0.2px] hover:!bg-cyan-600"
            >
              <ArrowPrevIcon className="w-5" />
              {t('text-previous-step')}
            </Button>

            <Button
              className="w-full text-sm tracking-[0.2px] sm:order-2"
              loading={isLoading}
              disabled={isLoading}
            >
              {t('text-submit-token')}
              <ArrowNextIcon className="w-5" />
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}
function PasswordForm({
  onSubmit,
  isLoading,
  handlePrevStep,
}: {
  onSubmit: SubmitHandler<Pick<ResetPasswordUserInput, 'password'>>;
  isLoading: boolean;
  handlePrevStep: () => void;
}) {
  const { t } = useTranslation('common');
  return (
    <Form<Pick<ResetPasswordUserInput, 'password'>>
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: { password: '' },
      }}
      validationSchema={passwordFormValidation}
    >
      {({ register, formState: { errors } }) => (
        <>
          <PasswordInput
            label={t('text-new-password')}
            {...register('password')}
            error={t(errors.password?.message!)}
          />
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            <Button
              onClick={handlePrevStep}
              className="order-1 w-full !bg-cyan-500 text-sm tracking-[0.2px] hover:!bg-cyan-600"
            >
              <ArrowPrevIcon className="w-5" />
              {t('text-previous-step')}
            </Button>
            <Button
              className="w-full text-sm tracking-[0.2px] sm:order-2"
              loading={isLoading}
              disabled={isLoading}
            >
              {t('text-reset-password')}
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}

function RenderFormSteps() {
  const {
    mutate: forgotPassword,
    isLoading,
    message,
    formError,
  } = useForgotPassword();
  const {
    mutate: verifyForgotPasswordToken,
    isLoading: verifying,
    formError: tokenFormError,
  } = useVerifyForgotPasswordToken();
  const { mutate: resetPassword, isLoading: resetting } = useResetPassword();
  // use hook for getting form state and actions
  const { state, actions } = useStateMachine({ updateFormState });

  const emailFormHandle: SubmitHandler<
    Pick<ForgotPasswordUserInput, 'email'>
  > = ({ email }) => {
    forgotPassword({ email });
  };

  const passwordFormHandle: SubmitHandler<
    Pick<ResetPasswordUserInput, 'password'>
  > = ({ password }) => {
    resetPassword({ password, token: state.token, email: state.email });
  };

  const tokenFormHandle: SubmitHandler<
    Pick<VerifyForgotPasswordUserInput, 'token'>
  > = ({ token }) => {
    verifyForgotPasswordToken({ token, email: state.email });
  };
  function backToPreviousStep(step: GlobalState['step']) {
    actions.updateFormState({
      step,
    });
  }
  return (
    <div>
      {state.step === 'Email' && (
        <EmailForm
          email={state.email}
          onSubmit={emailFormHandle}
          isLoading={isLoading}
          serverError={formError}
        />
      )}
      {state.step === 'Token' && (
        <>
          <Alert className="mb-4" message={message} />
          <TokenForm
            token={state.token}
            onSubmit={tokenFormHandle}
            isLoading={verifying}
            serverError={tokenFormError}
            handlePrevStep={() => backToPreviousStep('Email')}
          />
        </>
      )}
      {state.step === 'Password' && (
        <>
          <PasswordForm
            onSubmit={passwordFormHandle}
            isLoading={resetting}
            handlePrevStep={() => backToPreviousStep('Token')}
          />
        </>
      )}
    </div>
  );
}
export const initialState: GlobalState = {
  step: 'Email',
  email: '',
  password: '',
  token: '',
};
//@ts-ignore
createStore(initialState);

export const updateFormState = (
  state: typeof initialState,
  payload: {
    step: 'Email' | 'Token' | 'Password';
    [key: string]: string;
  }
) => {
  return {
    ...state,
    ...payload,
  };
};
export default function ForgotUserPassword() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();

  return (
    <StateMachineProvider>
      <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-center mb-7 text-body sm:mt-5 sm:mb-10 md:text-base">
          {t('forgot-password-helper')}
        </p>
        <RenderFormSteps />
        <div className="relative flex flex-col items-center justify-center text-sm mt-9 mb-7 text-heading sm:mt-11 sm:mb-8">
          <hr className="w-full" />
          <span className="start-2/4 -ms-4 absolute -top-2.5 bg-light px-2">
            {t('text-or')}
          </span>
        </div>
        <div className="text-sm text-center text-body sm:text-base">
          {t('text-back-to')}{' '}
          <button
            onClick={() => openModal('LOGIN_VIEW')}
            className="font-semibold underline transition-colors duration-200 ms-1 text-accent hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none"
          >
            {t('text-login')}
          </button>
        </div>
      </div>
    </StateMachineProvider>
  );
}
