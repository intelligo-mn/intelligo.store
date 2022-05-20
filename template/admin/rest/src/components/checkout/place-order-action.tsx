import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ROUTES } from "@utils/routes";

import ValidationError from "@components/ui/validation-error";
import Button from "@components/ui/button";
import isEmpty from "lodash/isEmpty";
import { formatOrderedProduct } from "@utils/format-ordered-product";
import { useCart } from "@contexts/quick-cart/cart.context";
import { useAtom } from "jotai";
import { checkoutAtom, discountAtom, walletAtom } from "@contexts/checkout";
import {
  calculatePaidTotal,
  calculateTotal,
} from "@contexts/quick-cart/cart.utils";
import { useCreateOrderMutation } from "@data/order/use-create-order-mutation";
import { useOrderStatusesQuery } from "@data/order-status/use-order-statuses.query";

export const PlaceOrderAction: React.FC = (props) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: createOrder, isLoading: loading } = useCreateOrderMutation();

  const { data: orderStatusData } = useOrderStatusesQuery({
    limit: 100,
    page: 1,
  });

  const { items } = useCart();
  const [
    {
      billing_address,
      shipping_address,
      delivery_time,
      coupon,
      verified_response,
      customer_contact,
      customer,
      payment_gateway,
      token,
    },
  ] = useAtom(checkoutAtom);
  const [discount] = useAtom(discountAtom);
  const [use_wallet_points] = useAtom(walletAtom);

  useEffect(() => {
    setErrorMessage(null);
  }, [payment_gateway]);

  const available_items = items?.filter(
    (item) => !verified_response?.unavailable_products?.includes(item.id)
  );

  const subtotal = calculateTotal(available_items);
  const total = calculatePaidTotal(
    {
      totalAmount: subtotal,
      tax: verified_response?.total_tax!,
      shipping_charge: verified_response?.shipping_charge!,
    },
    Number(discount)
  );
  const handlePlaceOrder = () => {
    if (!customer_contact) {
      setErrorMessage("Contact Number Is Required");
      return;
    }
    if (!use_wallet_points && !payment_gateway) {
      setErrorMessage("Gateway Is Required");
      return;
    }
    // if (!use_wallet_points && payment_gateway === "STRIPE" && !token) {
    //   setErrorMessage("Please Pay First");
    //   return;
    // }
    let input = {
      //@ts-ignore
      products: available_items?.map((item) => formatOrderedProduct(item)),
      status: orderStatusData?.orderStatuses?.data[0]?.id ?? "1",
      amount: subtotal,
      coupon_id: Number(coupon?.id),
      discount: discount ?? 0,
      paid_total: total,
      sales_tax: verified_response?.total_tax,
      delivery_fee: verified_response?.shipping_charge,
      total,
      delivery_time: delivery_time?.title,
      customer_contact,
      customer_id: customer?.value,
      use_wallet_points,
      payment_gateway,
      billing_address: {
        ...(billing_address?.address && billing_address.address),
      },
      shipping_address: {
        ...(shipping_address?.address && shipping_address.address),
      },
    };
    // if (payment_gateway === "STRIPE") {
    //   //@ts-ignore
    //   input.token = token;
    // }

    // delete input.billing_address.__typename;
    // delete input.shipping_address.__typename;
    createOrder(
      {
        variables: {
          // @ts-ignore
          input,
        },
      },
      {
        onSuccess: ({ data }: any) => {
          if (data?.id) {
            router.push(`${ROUTES.ORDERS}/${data?.id}`);
          }
        },
        onError: (error: any) => {
          setErrorMessage(error.message);
        },
      }
    );
  };
  const isAllRequiredFieldSelected = [
    customer,
    customer_contact,
    payment_gateway,
    billing_address,
    shipping_address,
    delivery_time,
    available_items,
  ].every((item) => !isEmpty(item));
  return (
    <>
      <Button
        loading={loading}
        className="w-full mt-5"
        onClick={handlePlaceOrder}
        disabled={!isAllRequiredFieldSelected}
        {...props}
      />
      {errorMessage && (
        <div className="mt-3">
          <ValidationError message={errorMessage} />
        </div>
      )}
    </>
  );
};
