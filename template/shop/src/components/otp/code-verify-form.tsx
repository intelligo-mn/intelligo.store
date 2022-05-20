import MobileOtpInput from 'react-otp-input';
import Button from '@/components/ui/button';
import Label from '@/components/ui/forms/label';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { Form } from '@/components/ui/forms/form';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useTranslation } from 'next-i18next';

type OptCodeFormProps = {
  code: string;
};

interface OtpLoginFormForAllUserProps {
  onSubmit: (formData: any) => void;
  isLoading: boolean;
}

const otpLoginFormSchemaForExistingUser = yup.object().shape({
  code: yup.string().required('error-code-required'),
});

export default function OtpCodeForm({
  onSubmit,
  isLoading,
}: OtpLoginFormForAllUserProps) {
  const { t } = useTranslation('common');
  const { closeModal } = useModalAction();

  return (
    <div className="p-5 space-y-5 border border-gray-200 rounded">
      <Form<OptCodeFormProps>
        onSubmit={onSubmit}
        validationSchema={otpLoginFormSchemaForExistingUser}
      >
        {({ control, formState: { errors } }) => (
          <>
            <div className="mb-5">
              <Label>{t('text-otp-code')}</Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MobileOtpInput
                    value={value}
                    onChange={onChange}
                    numInputs={6}
                    separator={
                      <span className="hidden sm:inline-block">-</span>
                    }
                    // containerStyle="justify-center space-x-2 sm:space-x-0 rtl:space-x-reverse"
                    containerStyle="flex items-center justify-between -mx-2"
                    // inputStyle="flex items-center justify-center !w-full sm:!w-11 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                    inputStyle="flex items-center justify-center !w-full mx-2 sm:!w-9 !px-0 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                    disabledStyle="!bg-gray-100"
                  />
                )}
                name="code"
                defaultValue=""
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Button
                variant="outline"
                onClick={closeModal}
                className="hover:border-red-500 hover:bg-red-500"
              >
                {t('text-cancel')}
              </Button>
              <Button loading={isLoading} disabled={isLoading}>
                {t('text-verify-code')}
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
