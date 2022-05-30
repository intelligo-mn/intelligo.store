import { AddStaffInput } from "@intelligo/dashboard/ts-types/generated";
import { ROUTES } from "@intelligo/dashboard/utils/routes";
import Shop from "@intelligo/dashboard/repositories/shop";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@intelligo/dashboard/utils/api/endpoints";

export interface IAddStaffVariables {
  variables: AddStaffInput;
}

export const useAddStaffMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables }: IAddStaffVariables) =>
      Shop.addStaff(API_ENDPOINTS.ADD_STAFF, variables),
    {
      onSuccess: () => {
        router.push(`/${router?.query?.shop}${ROUTES.STAFFS}`);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.STAFFS);
      },
    }
  );
};
