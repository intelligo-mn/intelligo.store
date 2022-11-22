import Coupon from '@components/checkout/coupon/coupon';
import usePrice from '@lib/use-price';
import EmptyCartIcon from '@components/icons/empty-cart';
import { CloseIcon } from '@components/icons/close-icon';
import { useTranslation } from 'next-i18next';
import { useCart } from '@store/quick-cart/cart.context';
import {
  calculatePaidTotal,
  calculateTotal,
} from "@store/quick-cart/cart.utils";
import { useAtom } from "jotai";
import {
  couponAtom,
  discountAtom,
  verifiedResponseAtom,
} from '@store/checkout';
import ItemCard from '@components/checkout/item/item-card';
import { ItemInfoRow } from '@components/checkout/item/item-info-row';
import PaymentGrid from '@components/checkout/payment/payment-grid';
import { PlaceOrderAction } from '@components/checkout/action/place-order-action';

interface Props {
  className?: string;
}
const VerifiedItemList: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation("common");
  const { items, isEmpty: isEmptyCart } = useCart();
  const [verifiedResponse] = useAtom(verifiedResponseAtom);
  const [coupon, setCoupon] = useAtom(couponAtom);
  const [discount] = useAtom(discountAtom);

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

  const { price: total } = usePrice(
    verifiedResponse && {
      amount: calculatePaidTotal(
        {
          totalAmount: base_amount,
          tax: verifiedResponse?.total_tax,
          shipping_charge: verifiedResponse?.shipping_charge,
        },
        Number(discount)
      ),
    }
  );
  return (
    <div className={className}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between text-heading text-base font-semibold bg-gray-200 px-6 py-3.5 border-b border-gray-300">
          <span>{t("text-product")}</span>
          <span>{t("text-sub-total")}</span>
        </div>
        {!isEmptyCart ? (
          <div className="px-6 py-2.5">
            {items?.map((item) => {
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
            })}
          </div>
        ) : (
          <EmptyCartIcon />
        )}
      </div>

      <div className="">
        <ItemInfoRow title={t("text-sub-total")} value={sub_total} />
        <ItemInfoRow title={t("text-tax")} value={tax} />
        <ItemInfoRow title={t("text-shipping")} value={shipping} />
        {discount && coupon ? (
          <div className="flex justify-between">
            <p className="text-sm text-body ltr:mr-4 rtl:ml-4">{t("text-discount")}</p>
            <span className="text-xs font-semibold text-red-500 flex items-center ltr:mr-auto rtl:ml-auto">
              ({coupon?.code})
              <button onClick={() => setCoupon(null)}>
                <CloseIcon className="w-3 h-3 ltr:ml-2 rtl:mr-2" />
              </button>
            </span>
            <span className="text-sm text-body">{discountPrice}</span>
          </div>
        ) : (
          <div className="flex justify-between py-4 px-6 border-t border-gray-100">
            <Coupon />
          </div>
        )}
        <div className="flex justify-between border-t-4 border-double border-gray-100 py-4 px-6">
          <p className="text-base font-semibold text-heading">
            {t("text-total")}
          </p>
          <span className="text-base font-semibold text-heading">{total}</span>
        </div>
      </div>
      <PaymentGrid className="px-6 py-5 border border-gray-100" />
      <PlaceOrderAction>{t("button-place-order")}</PlaceOrderAction>
    </div>
  );
};

export default VerifiedItemList;
