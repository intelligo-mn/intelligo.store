import {
  OrderService,
  VerifyCheckoutInputType,
} from 'apps/storefront/framework/rest/orders/order.service';
import { useMutation } from 'react-query';

export const useVerifyCheckoutMutation = () => {
  return useMutation((input: VerifyCheckoutInputType) =>
    OrderService.verifyCheckout(input)
  );
};
