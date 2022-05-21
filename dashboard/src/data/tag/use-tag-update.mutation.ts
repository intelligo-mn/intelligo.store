import { UpdateTag } from "@ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Tag from "@repositories/tag";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { useTranslation } from "next-i18next";
export interface ITagUpdateVariables {
  variables: {
    id: string;
    input: UpdateTag;
  };
}

export const useUpdateTagMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables: { id, input } }: ITagUpdateVariables) =>
      Tag.update(`${API_ENDPOINTS.TAGS}/${id}`, input),
    {
      onSuccess: () => {
        toast.success(t("common:successfully-updated"));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.TAGS);
      },
    }
  );
};
