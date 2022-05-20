import { useState } from 'react';
import Input from '@/components/ui/forms/input';
import Button from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { couponAtom } from '@/store/checkout';
import { useAtom } from 'jotai';
import classNames from 'classnames';
import { useVerifyCoupon } from '@/framework/settings';

const Coupon = ({ theme }: { theme?: 'dark' }) => {
  const { t } = useTranslation('common');
  const [hasCoupon, setHasCoupon] = useState(false);
  const [coupon, applyCoupon] = useAtom(couponAtom);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const { mutate: verifyCoupon, isLoading: loading, formError } = useVerifyCoupon();
  if (!hasCoupon && !coupon) {
    return (
      <p
        role="button"
        className="text-xs font-bold text-body transition duration-200 hover:text-accent"
        onClick={() => setHasCoupon(true)}
      >
        {t('text-have-coupon')}
      </p>
    );
  }
  function onSubmit({ code }: { code: string }) {
    verifyCoupon(
      {
        code,
      }
      // {
      //   onSuccess: (data) => {
      //     if (data.is_valid) {
      //       applyCoupon(data.coupon);
      //       setHasCoupon(false);
      //     } else {
      //       setError('code', {
      //         type: 'manual',
      //         message: 'error-invalid-coupon',
      //       });
      //     }
      //   },
      // }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col sm:flex-row"
    >
      <Input
        {...register('code', { required: 'text-coupon-required' })}
        placeholder={t('text-enter-coupon')}
        variant="outline"
        className="mb-4 flex-1 sm:mb-0 ltr:sm:mr-4 rtl:sm:ml-4"
        dimension="small"
        error={t(formError?.code!)}
      />
      <Button
        loading={loading}
        disabled={loading}
        size="small"
        className={classNames('w-full sm:w-40 lg:w-auto', {
          'bg-gray-800 transition-colors hover:bg-gray-900': theme === 'dark',
        })}
      >
        {t('text-apply')}
      </Button>
    </form>
  );
};

export default Coupon;
