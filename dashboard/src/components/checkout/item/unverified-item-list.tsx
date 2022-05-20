import { useCart } from "@contexts/quick-cart/cart.context";
import { useTranslation } from "next-i18next";
import ItemCard from "./item-card";
import EmptyCartIcon from "@components/icons/empty-cart";
import usePrice from "@utils/use-price";
import { ItemInfoRow } from "./item-info-row";
import { CheckAvailabilityAction } from "@components/checkout/check-availability-action";

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
      <div className="flex flex-col items-center space-s-4 mb-4">
        <span className="text-base font-bold text-heading">
          {t("text-your-order")}
        </span>
      </div>
      <div className="flex flex-col py-3 border-b border-border-200">
        {isEmpty ? (
          <div className="h-full flex flex-col items-center justify-center mb-4">
            <EmptyCartIcon width={140} height={176} />
            <h4 className="mt-6 text-base font-semibold">
              {t("text-no-products")}
            </h4>
          </div>
        ) : (
          items?.map((item) => <ItemCard item={item} key={item.id} />)
        )}
      </div>
      <div className="space-y-2 mt-4">
        <ItemInfoRow title={t("text-sub-total")} value={subtotal} />
        <ItemInfoRow
          title={t("text-tax")}
          value={t("text-calculated-checkout")}
        />
        <ItemInfoRow
          title={t("text-estimated-shipping")}
          value={t("text-calculated-checkout")}
        />
      </div>
      <CheckAvailabilityAction>
        {t("text-check-availability")}
      </CheckAvailabilityAction>
    </div>
  );
};
export default UnverifiedItemList;
