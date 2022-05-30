import Order from "@intelligo/dashboard/repositories/order";
import { useQuery } from "react-query";
import { Order as TOrder } from "@intelligo/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

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
