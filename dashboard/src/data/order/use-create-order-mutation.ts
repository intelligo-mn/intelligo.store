import { CreateOrder } from "@ts-types/generated";
import { useMutation } from "react-query";
import Order from "@repositories/order";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IOrderCreateVariables {
  variables: { id: string; input: CreateOrder };
}

export const useCreateOrderMutation = () => {
  return useMutation(({ variables: { input } }: IOrderCreateVariables) =>
    Order.create(API_ENDPOINTS.ORDERS, input)
  );
};
