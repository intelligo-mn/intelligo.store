import Checkout from "@repositories/checkout";
import { useMutation } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export type VerifyCheckoutInputType = {
  amount: number;
  products: any[];
  billing_address: any;
  shipping_address: any;
};

export const useVerifyCheckoutMutation = () => {
  return useMutation((input: VerifyCheckoutInputType) =>
    Checkout.verify(API_ENDPOINTS.CHECKOUT, input)
  );
};
