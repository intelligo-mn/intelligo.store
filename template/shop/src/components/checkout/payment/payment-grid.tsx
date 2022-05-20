import { RadioGroup } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Alert from '@/components/ui/alert';
import StripePayment from '@/components/checkout/payment/stripe';
import CashOnDelivery from '@/components/checkout/payment/cash-on-delivery';
import { useAtom } from 'jotai';
import { paymentGatewayAtom, PaymentMethodName } from '@/store/checkout';
import cn from 'classnames';

interface PaymentMethodInformation {
  name: string;
  value: PaymentMethodName;
  icon: string;
  component: React.FunctionComponent;
}

// Payment Methods Mapping Object

const AVAILABLE_PAYMENT_METHODS_MAP: Record<
  PaymentMethodName,
  PaymentMethodInformation
> = {
  STRIPE: {
    name: 'Stripe',
    value: 'STRIPE',
    icon: '/payment/stripe.png',
    component: StripePayment,
  },
  CASH_ON_DELIVERY: {
    name: 'Cash On Delivery',
    value: 'CASH_ON_DELIVERY',
    icon: '',
    component: CashOnDelivery,
  },
};

const PaymentGrid: React.FC<{ className?: string; theme?: 'bw' }> = ({
  className,
  theme,
}) => {
  const [gateway, setGateway] = useAtom<PaymentMethodName>(paymentGatewayAtom);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t } = useTranslation('common');
  const PaymentMethod = AVAILABLE_PAYMENT_METHODS_MAP[gateway];
  const Component = PaymentMethod?.component ?? StripePayment;
  return (
    <div className={className}>
      {errorMessage ? (
        <Alert
          message={t(`common:${errorMessage}`)}
          variant="error"
          closeable={true}
          className="mt-5"
          onClose={() => setErrorMessage(null)}
        />
      ) : null}

      <RadioGroup value={gateway} onChange={setGateway}>
        <RadioGroup.Label className="text-base text-heading font-semibold mb-5 block">
          {t('text-choose-payment')}
        </RadioGroup.Label>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 mb-8">
          {Object.values(AVAILABLE_PAYMENT_METHODS_MAP).map(
            ({ name, icon, value }) => (
              <RadioGroup.Option value={value} key={value}>
                {({ checked }) => (
                  <div
                    className={cn(
                      'w-full h-full py-3 flex items-center justify-center border text-center rounded cursor-pointer relative bg-light border-gray-200',
                      checked && 'bg-light !border-accent shadow-600',
                      {
                        'bg-light !border-gray-800 shadow-600':
                          theme === 'bw' && checked,
                      }
                    )}
                  >
                    {icon ? (
                      <>
                        {/* eslint-disable */}
                        <img src={icon} alt={name} className="h-[30px]" />
                      </>
                    ) : (
                      <span className="text-xs text-heading font-semibold">
                        {name}
                      </span>
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            )
          )}
        </div>
      </RadioGroup>
      <div>
        <Component />
      </div>
    </div>
  );
};

export default PaymentGrid;
