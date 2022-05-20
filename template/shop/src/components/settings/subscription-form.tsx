import type { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { SendIcon } from '@/components/icons/send-icon';
import { Form } from '@/components/ui/forms/form';
import * as yup from 'yup';

interface FormProps {
  onSubmit: SubmitHandler<FormValues>;
  loading?: boolean;
  success?: boolean;
}
type FormValues = {
  email: string;
};

const subscribeFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
});

export default function SubscriptionForm({
  onSubmit,
  loading,
  success,
}: FormProps) {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col">
      <Form<FormValues>
        onSubmit={onSubmit}
        validationSchema={subscribeFormSchema}
      >
        {({ register, formState: { errors } }) => (
          <>
            <div className="relative w-full rounded border border-gray-200 bg-gray-50 ltr:pr-11 rtl:pl-11">
              <input
                type="email"
                id="email_subscribe"
                {...register('email')}
                placeholder={t('common:text-enter-email')}
                className="h-14 w-full border-0 bg-transparent text-sm text-body outline-none focus:outline-none ltr:pl-5 rtl:pr-5"
              />
              <button className="absolute top-1/2 -mt-2 ltr:right-3 rtl:left-3">
                {loading ? (
                  <span
                    className="flex h-5 w-5 shrink-0 animate-spin rounded-full border-[3px] border-t-[3px] border-gray-300 text-accent ltr:ml-2 rtl:mr-2"
                    style={{
                      borderTopColor: 'currentcolor',
                    }}
                  />
                ) : (
                  <SendIcon className="text-gray-500 transition-colors hover:text-accent" />
                )}
              </button>
            </div>
            {errors.email?.message && (
              <div className="mt-1 text-[13px]">
                <span className="text-red-500">{t(errors.email.message)}</span>
              </div>
            )}
            {!loading && success && (
              <div className="mt-1 text-[13px]">
                <span className="text-accent">
                  {t('text-subscribe-successfully')}
                </span>
              </div>
            )}
          </>
        )}
      </Form>
    </div>
  );
}
