import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Manufacturer from "@repositories/manufacturer";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { useTranslation } from "next-i18next";
import { UpdateManufacturerInput } from "@ts-types/generated";

export interface IManufacturerUpdateVariables {
  variables: {
    input: UpdateManufacturerInput;
  };
}

export const useUpdateManufacturerMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { input } }: IManufacturerUpdateVariables) =>
      Manufacturer.update(`${API_ENDPOINTS.MANUFACTURERS}/${input?.id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.MANUFACTURERS);
      },
    }
  );
};
