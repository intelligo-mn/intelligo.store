import { isNegative } from "@utils/is-negative";
import usePrice from "@utils/use-price";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { payableAmountAtom, walletAtom } from "@contexts/checkout";
import Checkbox from "@components/ui/checkbox/checkbox";
import { useTranslation } from "next-i18next";
interface Props {
  totalPrice: number;
  walletAmount: number;
  walletCurrency: number;
}

const Wallet = ({ totalPrice, walletAmount, walletCurrency }: Props) => {
  const { t } = useTranslation("common");
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
      <div className="space-y-2 mt-2">
        {/* <p>Wallet</p> */}
        <div className="flex justify-between text-sm text-body">
          <span>
            {t("text-wallet")}{" "}
            <span className="lowercase">{t("text-points")}</span>
          </span>
          <span>{walletAmount}</span>
        </div>
        <div className="flex justify-between text-sm text-body">
          <span>
            {t("text-wallet")} {t("text-currency")}
          </span>
          <span>{currentWalletCurrency}</span>
        </div>
      </div>

      <Checkbox
        name="use_wallet"
        label={t("text-wallet-use")}
        className="mt-3"
        onChange={setUseWallet}
        checked={use_wallet}
        disabled={!walletAmount}
      />

      {use_wallet && (
        <div className="flex justify-between border-t-4 border-double border-border-base pt-3 mt-4">
          <span className="text-base font-semibold text-heading">
            {t("text-payable")}
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
