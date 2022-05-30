import { CreateWithdrawInput } from "apps/dashboard/src/ts-types/generated";
import { ROUTES } from "apps/dashboard/src/utils/routes";
import Withdraw from "apps/dashboard/src/repositories/withdraw";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";
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
