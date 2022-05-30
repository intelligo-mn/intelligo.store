import ConfirmationCard from "apps/dashboard/src/components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "apps/dashboard/src/components/ui/modal/modal.context";
import { useDeleteTagMutation } from "apps/dashboard/src/data/tag/use-tag-delete.mutation";
import { getErrorMessage } from "apps/dashboard/src/utils/form-error";

const TagDeleteView = () => {
  const { mutate: deleteTagById, isLoading: loading } = useDeleteTagMutation();

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  function handleDelete() {
    try {
      deleteTagById(modalData as string);
      closeModal();
    } catch (error) {
      closeModal();
      getErrorMessage(error);
    }
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
    />
  );
};

export default TagDeleteView;
