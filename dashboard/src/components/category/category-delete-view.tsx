import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { getErrorMessage } from "@utils/form-error";
import { useCategory } from "@core/category/useCategory";
import { remove } from "lodash";

const CategoryDeleteView = () => {
  const { removeCategory, loading } = useCategory()

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  function handleDelete() {
    try {
      removeCategory(modalData as string);
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

export default CategoryDeleteView;
