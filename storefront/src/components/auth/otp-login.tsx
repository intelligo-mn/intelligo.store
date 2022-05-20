import { useTranslation } from 'react-i18next';
import Alert from '@/components/ui/alert';
import { useAtom } from 'jotai';
import { useOtpLogin, useSendOtpCode } from '@/framework/user';
import { optAtom } from '@/components/otp/atom';
import { useModalAction } from '@/components/ui/modal/modal.context';
import Logo from '@/components/ui/logo';
import PhoneNumberForm from '@/components/otp/phone-number-form';
import OtpCodeForm from '@/components/otp/code-verify-form';
import OtpRegisterForm from '@/components/otp/otp-register-form';

function OtpLogin() {
  const { t } = useTranslation('common');
  const [otpState] = useAtom(optAtom);

  const {
    mutate: sendOtpCode,
    isLoading,
    serverError,
    setServerError,
  } = useSendOtpCode();

  const {
    mutate: otpLogin,
    isLoading: otpLoginLoading,
    serverError: optLoginError,
  } = useOtpLogin();

  function onSendCodeSubmission({ phone_number }: { phone_number: string }) {
    sendOtpCode({
      phone_number: `+${phone_number}`,
    });
  }

  function onOtpLoginSubmission(values: any) {
    otpLogin({
      ...values,
    });
  }

  return (
    <div className="mt-4">
      {otpState.step === 'PhoneNumber' && (
        <>
          <Alert
            variant="error"
            message={serverError && t(serverError)}
            className="mb-4"
            closeable={true}
            onClose={() => setServerError(null)}
          />
          <div className="flex items-center">
            <PhoneNumberForm
              onSubmit={onSendCodeSubmission}
              isLoading={isLoading}
              view="login"
            />
          </div>
        </>
      )}
      {otpState.step === 'OtpForm' && (
        <OtpCodeForm
          isLoading={otpLoginLoading}
          onSubmit={onOtpLoginSubmission}
        />
      )}
      {otpState.step === 'RegisterForm' && (
        <OtpRegisterForm
          loading={otpLoginLoading}
          onSubmit={onOtpLoginSubmission}
        />
      )}
    </div>
  );
}

export default function OtpLoginView() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();

  return (
    <div className="flex flex-col justify-center w-screen h-screen px-5 py-6 bg-light sm:p-8 md:h-auto md:max-w-md md:rounded-xl">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-center mb-7 text-body sm:mt-5 sm:mb-10 md:text-base">
        {t('otp-login-helper')}
      </p>
      <OtpLogin />
      <div className="relative flex flex-col items-center justify-center text-sm mt-9 mb-7 text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4">
          {t('text-or')}
        </span>
      </div>
      <div className="text-sm text-center text-body sm:text-base">
        {t('text-back-to')}{' '}
        <button
          onClick={() => openModal('LOGIN_VIEW')}
          className="font-semibold underline transition-colors duration-200 text-accent hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1"
        >
          {t('text-login')}
        </button>
      </div>
    </div>
  );
}
