import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  useCreateOrderMutation,
  useOrderStatusesQuery,
} from "@framework/orders/orders.query";
import { API_ENDPOINTS } from "@framework/utils/endpoints";

import ValidationError from "@components/ui/validation-error";
import Button from "@components/ui/button";
import isEmpty from "lodash/isEmpty";
import { formatOrderedProduct } from "@lib/format-ordered-product";
import { useCart } from "@store/quick-cart/cart.context";
import { useAtom } from "jotai";
import { checkoutAtom, discountAtom } from "@store/checkout";
import {
  calculatePaidTotal,
  calculateTotal,
} from "@store/quick-cart/cart.utils";
import {useTranslation} from "next-i18next";

export const PlaceOrderAction: React.FC = (props) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: createOrder, isLoading: loading } = useCreateOrderMutation();
  const [placeOrderLoading, setPlaceOrderLoading] = useState(loading);

  const { data: orderStatusData } = useOrderStatusesQuery();

  const { items } = useCart();
  const [
    {
      billing_address,
      shipping_address,
      delivery_time,
      coupon,
      verified_response,
      customer_contact,
      payment_gateway,
      token,
    },
  ] = useAtom(checkoutAtom);
  const [discount] = useAtom(discountAtom);

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
      setErrorMessage(t("common:contact-number-required"));
      return;
    }
    if (!payment_gateway) {
      setErrorMessage(t("common:text-gateway-required"));
      return;
    }
    if (payment_gateway === "STRIPE" && !token) {
      setErrorMessage(t("common:text-pay-first"));
      return;
    }
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
      payment_gateway,
      billing_address: {
        ...(billing_address?.address && billing_address.address),
      },
      shipping_address: {
        ...(shipping_address?.address && shipping_address.address),
      },
    };
    if (payment_gateway === "STRIPE") {
      //@ts-ignore
      input.token = token;
    }

    delete input.billing_address.__typename;
    delete input.shipping_address.__typename;
    createOrder(input, {
      onSuccess: (order: any) => {
        if (order?.tracking_number) {
          // Enable button loading until go to next page
          setPlaceOrderLoading(true);

          router.push(`${API_ENDPOINTS.ORDERS}/${order?.tracking_number}`);
        }
      },
      onError: (error: any) => {
        setErrorMessage(error?.response?.data?.message);
      },
    });
  };
  const isAllRequiredFieldSelected = [
    customer_contact,
    payment_gateway,
    billing_address,
    shipping_address,
    delivery_time,
    available_items,
  ].every((item) => !isEmpty(item));
  return (
    <div className="px-6">
      <Button
        loading={placeOrderLoading}
        className="w-full my-5"
        onClick={handlePlaceOrder}
        disabled={!isAllRequiredFieldSelected}
        {...props}
      />
      {errorMessage && (
        <div className="my-3">
          <ValidationError message={errorMessage} />
        </div>
      )}
    </div>
  );
};
