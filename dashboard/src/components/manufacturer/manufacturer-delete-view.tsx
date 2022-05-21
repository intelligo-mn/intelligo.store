import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteManufacturerMutation } from "@data/manufacturer/use-manufacturer-delete.mutation";

const ManufacturerDeleteView = () => {
  const { mutate: deleteManufacturerMutation, isLoading: loading } =
    useDeleteManufacturerMutation();

  const { data: modalData } = useModalState();
  const { closeModal } = useModalAction();
  function handleDelete() {
    deleteManufacturerMutation(modalData as string);
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

export default ManufacturerDeleteView;
