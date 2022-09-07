import { formatOrderedProduct } from "apps/storefront/lib/format-ordered-product";
import { useState } from "react";
import ValidationError from "apps/storefront/components/ui/validation-error";
import { useVerifyCheckoutMutation } from "apps/storefront/framework/rest/checkout/checkout.query";
import { useAtom } from "jotai";
import {
  billingAddressAtom,
  shippingAddressAtom,
  verifiedResponseAtom,
} from "apps/storefront/store/checkout";
import Button from "apps/storefront/components/ui/button";
import { useCart } from "apps/storefront/store/quick-cart/cart.context";
import { useTranslation } from "next-i18next";

export const CheckAvailabilityAction: React.FC = (props) => {
  const { t } = useTranslation("common");
  const [billing_address] = useAtom(billingAddressAtom);
  const [shipping_address] = useAtom(shippingAddressAtom);
  const [_, setVerifiedResponse] = useAtom(verifiedResponseAtom);

  const [errorMessage, setError] = useState("");
  const { items, total, isEmpty } = useCart();

  const {
    mutate: verifyCheckout,
    isLoading: loading,
  } = useVerifyCheckoutMutation();

  function handleVerifyCheckout() {
    if (billing_address && shipping_address) {
      verifyCheckout(
        {
          amount: total,
          products: items?.map((item) => formatOrderedProduct(item)),
          billing_address: {
            ...(billing_address?.address && billing_address.address),
          },
          shipping_address: {
            ...(shipping_address?.address && shipping_address.address),
          },
        },
        {
          onSuccess: (data) => {
            setVerifiedResponse(data);
          },
          onError: (error: any) => {
            setError(error?.response?.data?.message);
          },
        }
      );
    } else {
      setError("error-add-both-address");
    }
  }

  return (
    <>
      <Button
        loading={loading}
        className="w-full"
        onClick={handleVerifyCheckout}
        disabled={isEmpty}
        {...props}
      />
      {errorMessage && (
        <div className="mt-3">
          <ValidationError message={t(errorMessage)} />
        </div>
      )}
    </>
  );
};
