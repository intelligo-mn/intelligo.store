import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import Alert from '@/components/ui/alert';
import PhoneNumberForm from '@/components/otp/phone-number-form';
import { optAtom } from '@/components/otp/atom';
import OtpCodeForm from '@/components/otp/code-verify-form';
import { useSendOtpCode, useVerifyOtpCode } from '@/framework/user';

interface OtpFormProps {
  phoneNumber: string | undefined;
  onVerifySuccess: (values: { phone_number: string }) => void;
}
export default function OtpForm({
  phoneNumber,
  onVerifySuccess,
}: OtpFormProps) {
  const { t } = useTranslation('common');
  const [otpState] = useAtom(optAtom);

  const { mutate: verifyOtpCode, isLoading: otpVerifyLoading } =
    useVerifyOtpCode({ onVerifySuccess });
  const {
    mutate: sendOtpCode,
    isLoading,
    serverError,
    setServerError,
  } = useSendOtpCode();

  function onSendCodeSubmission({ phone_number }: { phone_number: string }) {
    sendOtpCode({
      phone_number: `+${phone_number}`,
    });
  }

  function onVerifyCodeSubmission({ code }: { code: string }) {
    verifyOtpCode({
      code,
      phone_number: otpState.phoneNumber,
      otp_id: otpState.otpId!,
    });
  }

  return (
    <>
      {otpState.step === 'PhoneNumber' && (
        <>
          <Alert
            variant="error"
            message={serverError && t(serverError)}
            className="mb-4"
            closeable={true}
            onClose={() => setServerError(null)}
          />
          <PhoneNumberForm
            onSubmit={onSendCodeSubmission}
            isLoading={isLoading}
            phoneNumber={phoneNumber}
          />
        </>
      )}

      {otpState.step === 'OtpForm' && (
        <OtpCodeForm
          onSubmit={onVerifyCodeSubmission}
          isLoading={otpVerifyLoading}
        />
      )}
    </>
  );
}
