import ConfirmationCard from "@components/common/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "@components/ui/modal/modal.context";
import { useDeleteShippingClassMutation } from "@data/shipping/use-shipping-delete.mutation";

const ShippingDeleteView = () => {
  const { mutate: deleteShippingClass, isLoading: loading } =
    useDeleteShippingClassMutation();

  const { data } = useModalState();
  const { closeModal } = useModalAction();
  function handleDelete() {
    deleteShippingClass(data);
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

export default ShippingDeleteView;
