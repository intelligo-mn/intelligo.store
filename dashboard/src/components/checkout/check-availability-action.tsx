import { formatOrderedProduct } from "@utils/format-ordered-product";
import { useState } from "react";
import ValidationError from "@components/ui/validation-error";
import omit from "lodash/omit";
import { useAtom } from "jotai";
import {
  billingAddressAtom,
  shippingAddressAtom,
  verifiedResponseAtom,
} from "@contexts/checkout";
import Button from "@components/ui/button";
import { useCart } from "@contexts/quick-cart/cart.context";
import { useTranslation } from "next-i18next";
import { useVerifyCheckoutMutation } from "@data/checkout/use-verify-checkout-mutation";

export const CheckAvailabilityAction: React.FC = (props) => {
  const { t } = useTranslation("common");

  const [billing_address] = useAtom(billingAddressAtom);
  const [shipping_address] = useAtom(shippingAddressAtom);
  const [_, setVerifiedResponse] = useAtom(verifiedResponseAtom);

  const [errorMessage, setError] = useState("");
  const { items, total, isEmpty } = useCart();

  const { mutate: verifyCheckout, isLoading: loading } =
    useVerifyCheckoutMutation();

  // {
  //   onCompleted: (data) => {
  //     //@ts-ignore
  //     setVerifiedResponse(data.verifyCheckout);
  //   },
  //   onError: (error) => {
  //     setError(error?.message);
  //   },
  // }

  function handleVerifyCheckout() {
    if (billing_address && shipping_address) {
      verifyCheckout(
        {
          amount: total,
          products: items?.map((item) => formatOrderedProduct(item)),
          billing_address: {
            ...(billing_address?.address &&
              omit(billing_address.address, ["__typename"])),
          },
          shipping_address: {
            ...(shipping_address?.address &&
              omit(shipping_address.address, ["__typename"])),
          },
        },
        {
          onSuccess: ({ data }: any) => {
            //@ts-ignore
            setVerifiedResponse(data);
          },
          onError: (error: any) => {
            setError(error?.message);
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
        className="w-full mt-5"
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
