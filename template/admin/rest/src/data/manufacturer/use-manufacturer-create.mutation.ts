import { CreateManufacturerInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import Manufacturer from "@repositories/manufacturer";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IManufacturerCreateVariables {
  variables: { input: CreateManufacturerInput };
}

export const useCreateManufacturerMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    query: { shop },
  } = router;

  return useMutation(
    ({ variables: { input } }: IManufacturerCreateVariables) =>
      Manufacturer.create(API_ENDPOINTS.MANUFACTURERS, input),
    {
      onSuccess: () => {
        if (shop) {
          router.push(`/${shop}${ROUTES.MANUFACTURERS}`);
        } else {
          router.push(ROUTES.MANUFACTURERS);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.MANUFACTURERS);
      },
    }
  );
};
