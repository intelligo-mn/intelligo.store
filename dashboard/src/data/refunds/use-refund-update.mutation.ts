// import { ROUTES } from "@utils/routes";
// import Tag from "@repositories/tag";
// import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import refunds from "@repositories/refunds";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export interface IUpdateRefundVariables {
  variables: { input: { id: string; status: string } };
}

export const useUpdateRefundMutation = () => {
  const queryClient = useQueryClient();
  // const router = useRouter();
  const { t } = useTranslation();

  return useMutation(
    ({ variables: { input } }: IUpdateRefundVariables) =>
      refunds.update(`${API_ENDPOINTS.REFUNDS}/${input.id}`, {
        status: input.status,
      }),
    {
      onSuccess: () => {
        toast.success(t("common:update-success"));
      },
      // onSuccess: () => {
      //   router.push(ROUTES.REFUNDS);
      // },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.REFUNDS);
      },
    }
  );
};
