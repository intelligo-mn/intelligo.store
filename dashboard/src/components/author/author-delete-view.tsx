import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteAuthorMutation } from "@data/author/use-author-delete.mutation";
import { getErrorMessage } from "@utils/form-error";

const AuthorDeleteView = () => {
  const { mutate: deleteAuthorMutation, isLoading: loading } =
    useDeleteAuthorMutation();

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  function handleDelete() {
    try {
      deleteAuthorMutation(modalData as string);
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

export default AuthorDeleteView;
