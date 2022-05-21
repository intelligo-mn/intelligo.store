import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Author from "@repositories/author";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { useTranslation } from "next-i18next";
import { UpdateAuthorInput } from "@ts-types/generated";

export interface IAuthorUpdateVariables {
  variables: {
    input: UpdateAuthorInput;
  };
}

export const useUpdateAuthorMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { input } }: IAuthorUpdateVariables) =>
      Author.update(`${API_ENDPOINTS.AUTHORS}/${input?.id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.AUTHORS);
      },
    }
  );
};
