import Button from '@/components/ui/button';
import PasswordInput from '@/components/ui/forms/password-input';
import type { ChangePasswordUserInput } from '@/types';
import { useTranslation } from 'next-i18next';
import { Form } from '@/components/ui/forms/form';
import { useChangePassword } from '@/framework/user';
import * as yup from 'yup';

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required('error-old-password-required'),
  newPassword: yup.string().required('error-new-password-required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'error-match-passwords')
    .required('error-confirm-password'),
});

export default function ChangePasswordForm() {
  const { t } = useTranslation('common');
  const {
    mutate: changePassword,
    isLoading: loading,
    formError,
  } = useChangePassword();

  function onSubmit({ newPassword, oldPassword }: ChangePasswordUserInput) {
    changePassword({
      oldPassword,
      newPassword,
    });
  }

  return (
    <Form<ChangePasswordUserInput & { passwordConfirmation: string }>
      onSubmit={onSubmit}
      validationSchema={changePasswordSchema}
      className="flex flex-col"
      serverError={formError}
    >
      {({ register, formState: { errors } }) => (
        <>
          <PasswordInput
            label={t('text-old-password')}
            {...register('oldPassword')}
            error={t(errors.oldPassword?.message!)}
            className="mb-5"
            variant="outline"
          />
          <PasswordInput
            label={t('text-new-password')}
            {...register('newPassword')}
            error={t(errors.newPassword?.message!)}
            className="mb-5"
            variant="outline"
          />
          <PasswordInput
            label={t('text-confirm-password')}
            {...register('passwordConfirmation')}
            error={t(errors.passwordConfirmation?.message!)}
            className="mb-5"
            variant="outline"
          />
          <Button
            loading={loading}
            disabled={loading}
            className="ltr:ml-auto rtl:mr-auto"
          >
            {t('text-submit')}
          </Button>
        </>
      )}
    </Form>
  );
}
