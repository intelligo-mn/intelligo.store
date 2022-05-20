import Order from "@repositories/order";
import { useQuery } from "react-query";
import { Order as TOrder } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchOrder = async (id: string) => {
  const { data } = await Order.find(`${API_ENDPOINTS.ORDERS}/${id}`);
  return { order: data };
};

type OrderResponse = {
  order: TOrder;
};

export const useOrderQuery = (id: string) => {
  return useQuery<OrderResponse, Error>([API_ENDPOINTS.ORDERS, id], () =>
    fetchOrder(id)
  );
};
