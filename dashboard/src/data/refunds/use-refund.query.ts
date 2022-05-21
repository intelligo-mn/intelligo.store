import Refunds from "@repositories/refunds";
import { useQuery } from "react-query";
import { Order as TOrder } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchRefund = async (id: string) => {
  const { data } = await Refunds.find(`${API_ENDPOINTS.REFUNDS}/${id}`);
  return { refund: data };
};

type RefundResponse = {
  refund: any;
};

export const useRefundQuery = (id: string) => {
  return useQuery<RefundResponse, Error>([API_ENDPOINTS.REFUNDS, id], () =>
    fetchRefund(id)
  );
};
