import { isNegative } from '@/lib/is-negative';
import usePrice from '@/lib/use-price';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { payableAmountAtom, walletAtom } from '@/store/checkout';
import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import { useTranslation } from 'next-i18next';
interface Props {
  totalPrice: number;
  walletAmount: number;
  walletCurrency: number;
}

const Wallet = ({ totalPrice, walletAmount, walletCurrency }: Props) => {
  const { t } = useTranslation('common');
  const [use_wallet, setUseWallet] = useAtom(walletAtom);
  const [calculatePayableAmount, setCalculatePayableAmount] =
    useAtom(payableAmountAtom);
  const [calculateCurrentWalletCurrency, setCalculateCurrentWalletCurrency] =
    useState(walletCurrency);

  const { price: currentWalletCurrency } = usePrice({
    amount: Number(calculateCurrentWalletCurrency),
  });
  const { price: payableAmount } = usePrice({
    amount: calculatePayableAmount,
  });
  useEffect(() => {
    if (use_wallet) {
      const calculatedCurrentWalletCurrencyAfterPayment =
        walletCurrency - totalPrice;
      if (isNegative(calculatedCurrentWalletCurrencyAfterPayment)) {
        setCalculateCurrentWalletCurrency(0);
        setCalculatePayableAmount(
          Math.abs(calculatedCurrentWalletCurrencyAfterPayment)
        );
      } else {
        setCalculateCurrentWalletCurrency(
          calculatedCurrentWalletCurrencyAfterPayment
        );
        setCalculatePayableAmount(0);
      }
    } else {
      setCalculateCurrentWalletCurrency(walletCurrency);
      setCalculatePayableAmount(0);
    }
  }, [setCalculatePayableAmount, totalPrice, use_wallet, walletCurrency]);

  return (
    <div>
      <div className="mt-2 space-y-2">
        {/* <p>Wallet</p> */}
        <div className="flex justify-between text-sm text-body">
          <span>
            {t('text-wallet')}{' '}
            <span className="lowercase">{t('text-points')}</span>
          </span>
          <span>{walletAmount}</span>
        </div>
        <div className="flex justify-between text-sm text-body">
          <span>
            {t('text-wallet')} {t('text-currency')}
          </span>
          <span>{currentWalletCurrency}</span>
        </div>
      </div>

      <Checkbox
        name="use_wallet"
        label={t('text-wallet-use')}
        className="mt-3"
        onChange={setUseWallet}
        checked={use_wallet}
        disabled={!walletAmount}
      />

      {use_wallet && (
        <div className="mt-4 flex justify-between border-t-4 border-double border-border-base pt-3">
          <span className="text-base font-semibold text-heading">
            {t('text-payable')}
          </span>
          <span className="text-base font-semibold text-heading">
            {payableAmount}
          </span>
        </div>
      )}
    </div>
  );
};

export default Wallet;
