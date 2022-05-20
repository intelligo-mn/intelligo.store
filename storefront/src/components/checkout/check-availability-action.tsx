import { formatOrderedProduct } from '@/lib/format-ordered-product';
import { useAtom } from 'jotai';
import { billingAddressAtom, shippingAddressAtom } from '@/store/checkout';
import Button from '@/components/ui/button';
import { useCart } from '@/store/quick-cart/cart.context';
import classNames from 'classnames';
import { useVerifyOrder } from '@/framework/order';
import omit from 'lodash/omit';

export const CheckAvailabilityAction: React.FC<{ className?: string }> = (
  props
) => {
  const [billing_address] = useAtom(billingAddressAtom);
  const [shipping_address] = useAtom(shippingAddressAtom);
  const { items, total, isEmpty } = useCart();

  const { mutate: verifyCheckout, isLoading: loading } = useVerifyOrder();

  function handleVerifyCheckout() {
    verifyCheckout({
      amount: total,
      products: items?.map((item) => formatOrderedProduct(item)),
      billing_address: {
        ...(billing_address?.address &&
          omit(billing_address.address, ['__typename'])),
      },
      shipping_address: {
        ...(shipping_address?.address &&
          omit(shipping_address.address, ['__typename'])),
      },
    });
  }

  return (
    <>
      <Button
        loading={loading}
        className={classNames('mt-5 w-full', props.className)}
        onClick={handleVerifyCheckout}
        disabled={isEmpty}
        {...props}
      />
    </>
  );
};
