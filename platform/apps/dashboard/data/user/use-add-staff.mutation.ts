import { AddStaffInput } from "apps/dashboard/src/ts-types/generated";
import { ROUTES } from "apps/dashboard/src/utils/routes";
import Shop from "apps/dashboard/src/repositories/shop";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "apps/dashboard/src/utils/api/endpoints";

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
