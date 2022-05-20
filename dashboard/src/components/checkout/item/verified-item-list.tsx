import Coupon from "@components/checkout/coupon";
import usePrice from "@utils/use-price";
import EmptyCartIcon from "@components/icons/empty-cart";
import { CloseIcon } from "@components/icons/close-icon";
import { useTranslation } from "next-i18next";
import { useCart } from "@contexts/quick-cart/cart.context";
import {
  calculatePaidTotal,
  calculateTotal,
} from "@contexts/quick-cart/cart.utils";
import { useAtom } from "jotai";
import {
  couponAtom,
  discountAtom,
  payableAmountAtom,
  verifiedResponseAtom,
  walletAtom,
} from "@contexts/checkout";
import ItemCard from "@components/checkout/item/item-card";
import { ItemInfoRow } from "@components/checkout/item/item-info-row";
import PaymentGrid from "@components/checkout/payment/payment-grid";
import { PlaceOrderAction } from "@components/checkout/place-order-action";
import Wallet from "@components/checkout/wallet/wallet";

interface Props {
  className?: string;
}
const VerifiedItemList: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation("common");
  const { items, isEmpty: isEmptyCart } = useCart();
  const [verifiedResponse] = useAtom(verifiedResponseAtom);
  const [coupon, setCoupon] = useAtom(couponAtom);
  const [discount] = useAtom(discountAtom);
  const [payableAmount] = useAtom(payableAmountAtom);
  const [use_wallet] = useAtom(walletAtom);

  const available_items = items?.filter(
    (item) => !verifiedResponse?.unavailable_products?.includes(item.id)
  );

  const { price: tax } = usePrice(
    verifiedResponse && {
      amount: verifiedResponse.total_tax ?? 0,
    }
  );

  const { price: shipping } = usePrice(
    verifiedResponse && {
      amount: verifiedResponse.shipping_charge ?? 0,
    }
  );

  const base_amount = calculateTotal(available_items);
  const { price: sub_total } = usePrice(
    verifiedResponse && {
      amount: base_amount,
    }
  );

  const { price: discountPrice } = usePrice(
    //@ts-ignore
    discount && {
      amount: Number(discount),
    }
  );
  const totalPrice = verifiedResponse
    ? calculatePaidTotal(
        {
          totalAmount: base_amount,
          tax: verifiedResponse?.total_tax,
          shipping_charge: verifiedResponse?.shipping_charge,
        },
        Number(discount)
      )
    : 0;
  const { price: total } = usePrice(
    verifiedResponse && {
      amount: totalPrice,
    }
  );
  return (
    <div className={className}>
      <div className="flex flex-col items-center space-s-4 mb-4">
        <span className="text-base font-bold text-heading">
          {t("text-your-order")}
        </span>
      </div>
      <div className="flex flex-col border-b pb-2 border-border-200">
        {!isEmptyCart ? (
          items?.map((item) => {
            const notAvailable = verifiedResponse?.unavailable_products?.find(
              (d: any) => d === item.id
            );
            return (
              <ItemCard
                item={item}
                key={item.id}
                notAvailable={!!notAvailable}
              />
            );
          })
        ) : (
          <EmptyCartIcon />
        )}
      </div>

      <div className="space-y-2 mt-4">
        <ItemInfoRow title={t("text-sub-total")} value={sub_total} />
        <ItemInfoRow title={t("text-tax")} value={tax} />
        <ItemInfoRow title={t("text-shipping")} value={shipping} />
        {discount && coupon ? (
          <div className="flex justify-between">
            <p className="text-sm text-body me-4">{t("text-discount")}</p>
            <span className="text-xs font-semibold text-red-500 flex items-center me-auto">
              ({coupon?.code})
              <button onClick={() => setCoupon(null)}>
                <CloseIcon className="w-3 h-3 ms-2" />
              </button>
            </span>
            <span className="text-sm text-body">{discountPrice}</span>
          </div>
        ) : (
          <div className="flex justify-between mt-5 !mb-4">
            <Coupon />
          </div>
        )}
        <div className="flex justify-between border-t-4 border-double border-border-200 pt-3">
          <p className="text-base font-semibold text-heading">
            {t("text-total")}
          </p>
          <span className="text-base font-semibold text-heading">{total}</span>
        </div>
      </div>
      {verifiedResponse && (
        <Wallet
          totalPrice={totalPrice}
          walletAmount={verifiedResponse.wallet_amount}
          walletCurrency={verifiedResponse.wallet_currency}
        />
      )}
      {use_wallet && !Boolean(payableAmount) ? null : (
        <PaymentGrid className="bg-light p-5 border border-gray-200 mt-10" />
      )}
      <PlaceOrderAction>{t("text-place-order")}</PlaceOrderAction>
    </div>
  );
};

export default VerifiedItemList;
