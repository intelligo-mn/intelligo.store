import Withdraw from "@intelligo/dashboard/repositories/withdraw";
import { useQuery } from "react-query";
import { Withdraw as TWithdraw } from "@intelligo/dashboard/ts-types/generated";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export const fetchWithdraw = async (id: string) => {
  const { data } = await Withdraw.find(`${API_ENDPOINTS.WITHDRAWS}/${id}`);
  return { withdraw: data };
};

type IProps = {
  withdraw: TWithdraw;
};
export const useWithdrawQuery = (id: string) => {
  return useQuery<IProps, Error>([API_ENDPOINTS.WITHDRAWS, id], () =>
    fetchWithdraw(id)
  );
};
