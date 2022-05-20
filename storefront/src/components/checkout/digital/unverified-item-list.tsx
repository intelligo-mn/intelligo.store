import { useCart } from '@/store/quick-cart/cart.context';
import { useTranslation } from 'next-i18next';
import CartItem from './cart-item';
import EmptyCartIcon from '@/components/icons/empty-cart';
import usePrice from '@/lib/use-price';
import { ItemInfoRow } from '@/components/checkout/digital/item-info-row';
import { CheckAvailabilityAction } from '@/components/checkout/check-availability-action';

const UnverifiedItemList = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  const { t } = useTranslation('common');
  const { items, total, isEmpty } = useCart();
  const { price: subtotal } = usePrice(
    items && {
      amount: total,
    }
  );
  return (
    <div className="w-full">
      <div className="flex flex-col border-b border-dashed pb-7 border-border-400">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full mb-4">
            <EmptyCartIcon width={140} height={176} />
            <h4 className="mt-6 text-base font-semibold">
              {t('text-no-products')}
            </h4>
          </div>
        ) : (
          items?.map((item) => <CartItem item={item} key={item.id} />)
        )}
      </div>
      <div className="mt-4 space-y-2">
        <ItemInfoRow title={t('text-sub-total')} value={subtotal} />
        <ItemInfoRow
          title={t('text-tax')}
          value={t('text-calculated-checkout')}
        />
        <ItemInfoRow
          title={t('text-estimated-shipping')}
          value={t('text-calculated-checkout')}
        />
      </div>
      <CheckAvailabilityAction className="w-full mt-8 font-normal h-[50px] !bg-gray-800 transition-colors hover:!bg-gray-900">
        {t('text-check-availability')}
      </CheckAvailabilityAction>
    </div>
  );
};
export default UnverifiedItemList;
