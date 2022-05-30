import { ApproveWithdrawInput } from "apps/dashboard/ts-types/generated";
import Withdraw from "apps/dashboard/repositories/withdraw";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
export interface IWithdrawApproveVariables {
  variables: {
    input: ApproveWithdrawInput;
  };
}

export const useApproveWithdrawMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { input } }: IWithdrawApproveVariables) =>
      Withdraw.approve(API_ENDPOINTS.APPROVE_WITHDRAW, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.WITHDRAWS);
      },
    }
  );
};
