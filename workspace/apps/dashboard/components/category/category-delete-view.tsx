import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteCategoryMutation } from "@data/category/use-category-delete.mutation";

const CategoryDeleteView = () => {
  const { mutate: deleteCategory, isLoading: loading } =
    useDeleteCategoryMutation();

  const { data } = useModalState();
  const { closeModal } = useModalAction();
  function handleDelete() {
    deleteCategory(data);
    closeModal();
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
