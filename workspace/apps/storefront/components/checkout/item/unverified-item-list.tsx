import { useCart } from '@store/quick-cart/cart.context';
import { useTranslation } from 'next-i18next';
import ItemCard from './item-card';
import EmptyCartIcon from '@components/icons/empty-cart';
import usePrice from '@lib/use-price';
import { ItemInfoRow } from './item-info-row';
import { CheckAvailabilityAction } from '@components/checkout/action/check-availability-action';

const UnverifiedItemList = () => {
  const { t } = useTranslation("common");
  const { items, total, isEmpty } = useCart();
  const { price: subtotal } = usePrice(
    items && {
      amount: total,
    }
  );
  return (
    <div className="w-full">
      <h2 className="text-xl xl:text-2xl font-bold text-heading mb-5 md:mb-6 -mt-2 text-center ltr:lg:text-left rtl:lg:text-right">
        {t("text-your-order")}
      </h2>
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <div className="flex flex-col">
          {isEmpty ? (
            <div className="h-full flex flex-col items-center justify-center py-8">
              <EmptyCartIcon width={190} height={205} />
              <h4 className="mt-6 text-[15px] text-heading font-semibold">
                {t("text-no-products")}
              </h4>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-heading text-base font-semibold bg-gray-200 px-6 py-3.5 border-b border-gray-300">
                <span>{t("text-product")}</span>
                <span>{t("text-sub-total")}</span>
              </div>
              <div className="px-6 py-2.5">
                {items?.map((item) => (
                  <ItemCard item={item} key={item.id} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="">
          <ItemInfoRow title={t("text-sub-total")} value={subtotal} />
          <ItemInfoRow
            title={t("text-tax")}
            value={t("text-calculated-checkout")}
          />
          <ItemInfoRow
            title={t("text-shipping")}
            value={t("text-calculated-checkout")}
          />
        </div>
        <div className="px-6 pt-2 pb-6">
          <CheckAvailabilityAction>
            {t("text-check-availability")}
          </CheckAvailabilityAction>
        </div>
      </div>
    </div>
  );
};
export default UnverifiedItemList;
