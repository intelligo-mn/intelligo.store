import { CreateWithdrawInput } from "apps/dashboard/ts-types/generated";
import { ROUTES } from "apps/dashboard/utils/routes";
import Withdraw from "apps/dashboard/repositories/withdraw";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/utils/api/endpoints";
import { animatedScrollTo } from "react-select/src/utils";

export interface IWithdrawCreateVariables {
  variables: {
    input: CreateWithdrawInput;
  };
}

export const useCreateWithdrawMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables: { input } }: IWithdrawCreateVariables) =>
      Withdraw.create(API_ENDPOINTS.WITHDRAWS, input),
    {
      onSuccess: () => {
        router.push(`/${router.query.shop}/withdraws`);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.WITHDRAWS);
      },
    }
  );
};
