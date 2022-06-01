import { useMutation, useQueryClient } from "react-query";
import Attachment from "@repositories/upload";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const useUploadMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (input: any) => {
      return Attachment.upload(API_ENDPOINTS.ATTACHMENTS, input);
    },
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.SETTINGS);
      },
    }
  );
};
